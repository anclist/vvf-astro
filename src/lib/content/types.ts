// Normalized content shapes every page/component consumes, sourced from
// EmDash (see src/lib/content/index.ts). Images are always resolved to a
// plain URL (or omitted) — components never touch the raw CMS shape.

export interface EventItem {
  slug: string
  title: string
  startDate: string // ISO
  location: string
  description?: string
  imageUrl?: string
  category?: 'golf-tournament' | 'community' | 'awareness'
  donorboxEventId?: string
  sponsorPackages?: SponsorshipPackage[]
  auctionItems?: AuctionItem[]
  sponsors?: Sponsor[]
}

export interface ChildItem {
  slug: string
  displayName: string
  age: number
  birthday?: string
  gender?: 'Male' | 'Female'
  dream?: string
  imageUrl?: string
  published: boolean
  donorboxSponsorshipRef?: string
}

export type TeamTier = 'board' | 'leader' | 'staff'

export interface TeamMemberItem {
  slug: string
  name: string
  role: string
  tier: TeamTier
  imageUrl?: string
  bio?: string
  longBio?: string
  quote?: string
  since?: string
  from?: string
  basedIn?: string
  background?: { label: string; value: string }[]
  socialLinks?: { platform: 'linkedin' | 'x' | 'website'; url: string }[]
}

export interface PostItem {
  slug: string
  title: string
  author?: string
  publishedAt: string
  updatedAt?: string
  category: 'Stories' | 'Events' | 'Financials' | 'News'
  excerpt?: string
  imageUrl?: string
  body?: string
  featured?: boolean
}

export interface Sponsor {
  name: string
  logoUrl?: string
  website?: string
}

export interface SponsorshipPackage {
  tierName: string
  price?: string
  recognitionBenefits?: string[]
  activityBenefits?: string[]
  promotionalBenefits?: string[]
  order?: number
}

export interface AuctionItem {
  name: string
  imageUrl?: string
  estimatedValue?: string
  bidUrl?: string
}

export interface Faq {
  question: string
  answer: string
  category: 'sponsorship' | 'donation' | 'tournament' | 'general'
  order?: number
}

export interface CampaignUpdate {
  title: string
  date: string
  imageUrl?: string
  videoUrl?: string
  body?: string
}

export interface CampaignSettings {
  active: boolean
  bannerText?: string
  donorboxCampaignId?: string
}

export interface NavItem {
  label: string
  url: string
  children?: NavItem[]
}

export const CHILD_AGE_RANGES = ['0-2', '3-5', '6-8', '9-11', '12-14', '15+'] as const
export type ChildAgeRange = (typeof CHILD_AGE_RANGES)[number]

export function ageRangeOf(age: number): ChildAgeRange {
  if (age <= 2) return '0-2'
  if (age <= 5) return '3-5'
  if (age <= 8) return '6-8'
  if (age <= 11) return '9-11'
  if (age <= 14) return '12-14'
  return '15+'
}
