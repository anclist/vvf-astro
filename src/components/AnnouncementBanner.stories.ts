import AnnouncementBanner from './AnnouncementBanner.astro'

export default {
  title: 'Atoms/AnnouncementBanner',
  component: AnnouncementBanner,
}

export const Active = {
  args: {
    active: true,
    text: 'Earthquake relief: Venezuelan families need help now.',
  },
}

export const CustomLink = {
  args: {
    active: true,
    text: 'Matching gift month: every dollar doubled through June.',
    href: '/ways-to-give',
  },
}

// Renders nothing when inactive, kept as a story so that's visible in Storybook rather than surprising in prod.
export const Inactive = {
  args: { active: false },
}
