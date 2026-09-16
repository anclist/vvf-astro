// Content adapter: every page/component reads through the functions below,
// never through EmDash's query functions directly. Content lives in EmDash
// (schema + seed data checked in at seed/seed.json, applied to the local
// SQLite database via `npx emdash seed seed/seed.json`).
import { getEmDashCollection, getEmDashEntry } from 'emdash'
import type {
  EventItem,
  ChildItem,
  TeamMemberItem,
  TeamTier,
  PostItem,
  Faq,
  CampaignUpdate,
  CampaignSettings,
  SponsorshipPackage,
  AuctionItem,
  Sponsor,
} from './types'

interface EmDashImage {
  src?: string
}

// EmDash defaults getEmDashCollection() to 50 results; every collection here
// is small (dozens of rows), but pass an explicit ceiling so a future growth
// in content doesn't silently truncate a list.
const LIST_LIMIT = 100

function resolveImage(image: EmDashImage | undefined | null): string | undefined {
  return image?.src
}

async function resolveRefs<T>(
  collection: string,
  ids: unknown,
  map: (data: Record<string, any>) => T
): Promise<T[] | undefined> {
  if (!Array.isArray(ids) || ids.length === 0) return undefined
  const entries = await Promise.all(ids.map((id) => getEmDashEntry(collection, String(id))))
  return entries.flatMap((r) => (r.entry ? [map(r.entry.data as Record<string, any>)] : []))
}

function toSponsorshipPackage(d: Record<string, any>): SponsorshipPackage {
  return {
    tierName: d.tier_name,
    price: d.price,
    recognitionBenefits: d.recognition_benefits ?? undefined,
    activityBenefits: d.activity_benefits ?? undefined,
    promotionalBenefits: d.promotional_benefits ?? undefined,
    order: d.order,
  }
}

function toAuctionItem(d: Record<string, any>): AuctionItem {
  return {
    name: d.name,
    imageUrl: resolveImage(d.image),
    estimatedValue: d.estimated_value,
    bidUrl: d.bid_url,
  }
}

function toSponsor(d: Record<string, any>): Sponsor {
  return {
    name: d.name,
    logoUrl: resolveImage(d.logo),
    website: d.website,
  }
}

// --- Events -----------------------------------------------------------

export async function getEvents(): Promise<EventItem[]> {
  const { entries } = await getEmDashCollection('events', { limit: LIST_LIMIT })
  return Promise.all(
    entries.map(async (e) => {
      const d = e.data as Record<string, any>
      return {
        slug: e.slug ?? '',
        title: d.title,
        startDate: d.start_date,
        location: d.location,
        description: d.description,
        imageUrl: resolveImage(d.image),
        category: d.category,
        donorboxEventId: d.donorbox_event_id,
        sponsorPackages: await resolveRefs('sponsorship_packages', d.sponsor_packages, toSponsorshipPackage),
        auctionItems: await resolveRefs('auction_items', d.auction_items, toAuctionItem),
        sponsors: await resolveRefs('sponsors', d.sponsors, toSponsor),
      } satisfies EventItem
    })
  )
}

export async function getEventBySlug(slug: string): Promise<EventItem | undefined> {
  const all = await getEvents()
  return all.find((e) => e.slug === slug)
}

export function isUpcoming(event: Pick<EventItem, 'startDate'>): boolean {
  return new Date(event.startDate).getTime() >= Date.now()
}

// --- Children -----------------------------------------------------------

export async function getChildren(): Promise<ChildItem[]> {
  const { entries } = await getEmDashCollection('children', { where: { published: true }, limit: LIST_LIMIT })
  return entries.map((e) => {
    const d = e.data as Record<string, any>
    return {
      slug: e.slug ?? '',
      displayName: d.display_name,
      age: d.age,
      birthday: d.birthday,
      gender: d.gender,
      dream: d.dream,
      imageUrl: resolveImage(d.photo),
      published: d.published ?? false,
      donorboxSponsorshipRef: d.donorbox_sponsorship_ref,
    } satisfies ChildItem
  })
}

export async function getChildBySlug(slug: string): Promise<ChildItem | undefined> {
  const all = await getChildren()
  return all.find((c) => c.slug === slug)
}

// --- Team -----------------------------------------------------------

export async function getTeamMembers(tier?: TeamTier): Promise<TeamMemberItem[]> {
  const { entries } = await getEmDashCollection('team_members', {
    limit: LIST_LIMIT,
    ...(tier ? { where: { tier } } : {}),
  })
  return entries.map((e) => {
    const d = e.data as Record<string, any>
    return {
      slug: e.slug ?? '',
      name: d.name,
      role: d.role,
      tier: d.tier,
      imageUrl: resolveImage(d.photo),
      bio: d.bio,
      longBio: d.long_bio,
      quote: d.quote,
      since: d.since,
      from: d.from,
      basedIn: d.based_in,
      background: d.background ?? undefined,
      socialLinks: d.social_links ?? undefined,
    } satisfies TeamMemberItem
  })
}

// Only board/leader tiers get a detail route (see front-end spec).
export async function getTeamMemberBySlug(slug: string): Promise<TeamMemberItem | undefined> {
  const boardAndLeaders = [...(await getTeamMembers('board')), ...(await getTeamMembers('leader'))]
  return boardAndLeaders.find((m) => m.slug === slug)
}

// --- Blog -----------------------------------------------------------

export async function getPosts(category?: PostItem['category']): Promise<PostItem[]> {
  const { entries } = await getEmDashCollection('posts', {
    limit: LIST_LIMIT,
    orderBy: { published_on: 'desc' },
    ...(category ? { where: { category } } : {}),
  })
  return entries.map((e) => {
    const d = e.data as Record<string, any>
    return {
      slug: e.slug ?? '',
      title: d.title,
      author: d.author,
      publishedAt: d.published_on,
      updatedAt: d.updated_on,
      category: d.category,
      excerpt: d.excerpt,
      imageUrl: resolveImage(d.image),
      body: d.body,
      featured: d.featured ?? false,
    } satisfies PostItem
  })
}

export async function getPostBySlug(slug: string): Promise<PostItem | undefined> {
  const all = await getPosts()
  return all.find((p) => p.slug === slug)
}

export async function getFeaturedPosts(): Promise<PostItem[]> {
  const all = await getPosts()
  return all.filter((p) => p.featured)
}

// --- Site-wide sponsors / sponsorship tiers -----------------------------

export async function getSponsors(): Promise<Sponsor[]> {
  const { entries } = await getEmDashCollection('sponsors', { limit: LIST_LIMIT })
  return entries.map((e) => toSponsor(e.data as Record<string, any>))
}

// General, site-wide sponsorship tiers (e.g. shown on Corporate
// Sponsorships). Event-specific tiers (scope: "event") are only reachable
// through that event's `sponsorPackages`, never listed here.
export async function getSponsorshipPackages(): Promise<SponsorshipPackage[]> {
  const { entries } = await getEmDashCollection('sponsorship_packages', {
    where: { scope: 'general' },
    orderBy: { order: 'asc' },
    limit: LIST_LIMIT,
  })
  return entries.map((e) => toSponsorshipPackage(e.data as Record<string, any>))
}

// --- FAQs -----------------------------------------------------------

export async function getFaqs(category?: Faq['category']): Promise<Faq[]> {
  const { entries } = await getEmDashCollection('faqs', {
    limit: LIST_LIMIT,
    orderBy: { order: 'asc' },
    ...(category ? { where: { category } } : {}),
  })
  return entries.map((e) => {
    const d = e.data as Record<string, any>
    return {
      question: d.question,
      answer: d.answer,
      category: d.category,
      order: d.order,
    } satisfies Faq
  })
}

// --- Earthquake relief campaign -----------------------------------------------------------

export async function getCampaignUpdates(): Promise<CampaignUpdate[]> {
  const { entries } = await getEmDashCollection('campaign_updates', { orderBy: { date: 'desc' }, limit: LIST_LIMIT })
  return entries.map((e) => {
    const d = e.data as Record<string, any>
    return {
      title: d.title,
      date: d.date,
      imageUrl: resolveImage(d.image),
      videoUrl: d.video_url,
      body: d.body,
    } satisfies CampaignUpdate
  })
}

export async function getCampaignSettings(): Promise<CampaignSettings> {
  const { entries } = await getEmDashCollection('campaign_settings', { limit: 1 })
  const d = entries[0]?.data as Record<string, any> | undefined
  if (!d) return { active: false }
  return {
    active: d.active ?? false,
    bannerText: d.banner_text,
    donorboxCampaignId: d.donorbox_campaign_id,
  }
}
