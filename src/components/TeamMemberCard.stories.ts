import TeamMemberCard from './TeamMemberCard.astro'
import type { TeamMemberItem } from '../lib/content/types'

export default {
  title: 'Components/TeamMemberCard',
  component: TeamMemberCard,
}

export const BoardMember = {
  args: {
    member: {
      slug: 'ana-rodriguez',
      name: 'Ana Rodriguez',
      role: 'Board Chair',
      tier: 'board',
      bio: 'Ana has led the foundation’s board since 2018.',
    } satisfies TeamMemberItem,
  },
}

export const StaffMember = {
  args: {
    member: {
      slug: 'sam-lee',
      name: 'Sam Lee',
      role: 'Program Coordinator',
      tier: 'staff',
    } satisfies TeamMemberItem,
  },
}
