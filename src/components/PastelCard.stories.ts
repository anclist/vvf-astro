import PastelCard from './PastelCard.astro'

export default {
  title: 'Molecules/PastelCard',
  component: PastelCard,
}

export const Yellow = {
  args: {
    tone: 'yellow',
    eyebrow: 'Nutrition',
    title: 'Meals that fuel a full day of school',
    body: 'Every sponsored child receives daily meals through our partner schools.',
    cta: { label: 'Learn more', href: '/sponsor-a-child' },
  },
}

export const Pink = {
  args: {
    tone: 'pink',
    eyebrow: 'Medical',
    title: 'Routine checkups, twice a year',
    body: 'Regular care keeps every child healthy year-round.',
  },
}

export const NoCta = {
  args: {
    tone: 'blue',
    title: 'Education support',
    body: 'School supplies, tutoring, and mentorship.',
  },
}
