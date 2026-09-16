import ImpactBanner from './ImpactBanner.astro'

export default {
  title: 'Components/ImpactBanner',
  component: ImpactBanner,
}

export const Default = {
  args: {
    eyebrow: 'Our impact',
    heading: '1,200 children fed, educated, and cared for this year',
    body: 'Every sponsorship funds meals, school supplies, and routine medical checkups.',
    bullets: ['Daily meals through partner schools', 'Twice-yearly medical checkups', 'School supplies and tutoring'],
    cta: { label: 'See the full report', href: '/blog' },
  },
}
