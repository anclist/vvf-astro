import Hero from './Hero.astro'

export default {
  title: 'Components/Hero',
  component: Hero,
}

export const Default = {
  args: {
    heading: 'Give a child in Venezuela a brighter future',
    subtext: 'Sponsor a child today and change a life for as little as $38 a month.',
    primaryCta: { label: 'Sponsor a child', href: '/sponsor-a-child' },
    secondaryCta: { label: 'Learn more', href: '/our-team' },
  },
}

export const NoImage = {
  args: {
    heading: 'Every gift changes a life',
    primaryCta: { label: 'Donate now', href: '/ways-to-give' },
  },
}
