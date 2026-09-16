import SponsorshipTierTable from './SponsorshipTierTable.astro'
import type { SponsorshipPackage } from '../lib/content/types'

const tiers: SponsorshipPackage[] = [
  {
    tierName: 'Bronze',
    price: '$500',
    recognitionBenefits: ['Logo on event signage'],
    order: 1,
  },
  {
    tierName: 'Silver',
    price: '$1,500',
    recognitionBenefits: ['Logo on event signage', 'Mention in event program'],
    activityBenefits: ['Two golf foursomes'],
    order: 2,
  },
  {
    tierName: 'Gold',
    price: '$5,000',
    recognitionBenefits: ['Logo on event signage', 'Mention in event program', 'Social media shoutout'],
    activityBenefits: ['Four golf foursomes'],
    promotionalBenefits: ['Branded item in gift bags'],
    order: 3,
  },
]

export default {
  title: 'Components/SponsorshipTierTable',
  component: SponsorshipTierTable,
}

export const Default = {
  args: { tiers },
}
