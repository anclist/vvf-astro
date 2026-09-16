import EventCard from './EventCard.astro'
import type { EventItem } from '../lib/content/types'

export default {
  title: 'Molecules/EventCard',
  component: EventCard,
}

export const Upcoming = {
  args: {
    event: {
      slug: 'spring-golf-tournament',
      title: 'Spring Golf Tournament',
      startDate: '2027-04-18',
      location: 'Weston, FL',
      description: 'A day on the green to support meals, medical care, and education for sponsored children.',
      category: 'golf-tournament',
    } satisfies EventItem,
  },
}

export const Past = {
  args: {
    event: {
      slug: 'fall-gala-2025',
      title: 'Fall Gala 2025',
      startDate: '2025-10-04',
      location: 'Miami, FL',
      category: 'community',
    } satisfies EventItem,
  },
}
