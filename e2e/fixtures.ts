import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

// Reuses seed/seed.json as the single source of truth for E2E fixtures —
// the same file `npm run seed` applies to the DB and scripts/verify-menu-links.mjs
// already parses. No parallel fixture schema to keep in sync.
const seedPath = fileURLToPath(new URL('../seed/seed.json', import.meta.url))
const seed = JSON.parse(readFileSync(seedPath, 'utf-8'))

interface SeedEntry {
  slug: string
  data: Record<string, unknown>
}

function collection(name: string): SeedEntry[] {
  return seed.content[name] ?? []
}

export function firstChild() {
  const child = collection('children').find((c) => c.data.published)
  if (!child) throw new Error('seed/seed.json has no published child fixture')
  return { slug: child.slug, displayName: child.data.display_name as string, age: child.data.age as number }
}

export function firstEvent() {
  const [event] = collection('events')
  if (!event) throw new Error('seed/seed.json has no event fixture')
  return { slug: event.slug, title: event.data.title as string }
}

export function firstPost() {
  const [post] = collection('posts')
  if (!post) throw new Error('seed/seed.json has no post fixture')
  return { slug: post.slug, title: post.data.title as string }
}

export function firstBoardMember() {
  const member = collection('team_members').find((m) => m.data.tier === 'board')
  if (!member) throw new Error('seed/seed.json has no board-tier team member fixture')
  return { slug: member.slug, name: member.data.name as string }
}

export function firstStaffMember() {
  const member = collection('team_members').find((m) => m.data.tier === 'staff')
  if (!member) throw new Error('seed/seed.json has no staff-tier team member fixture')
  return { slug: member.slug, name: member.data.name as string }
}
