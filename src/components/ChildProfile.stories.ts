import ChildProfile from './ChildProfile.astro'
import DonationAmountWidget from './DonationAmountWidget.astro'
import type { ChildItem } from '../lib/content/types'

const maria: ChildItem = {
  slug: 'maria',
  displayName: 'Maria',
  age: 8,
  birthday: '2018-03-14',
  gender: 'Female',
  dream: 'Become a teacher',
  published: true,
  donorboxSponsorshipRef: 'maria-sponsorship',
}

export default {
  title: 'Components/ChildProfile',
  component: ChildProfile,
}

// ChildProfile renders its "donation" slot as an empty column when unset —
// every story here supplies one so the layout matches the real page.
export const Default = {
  args: {
    child: maria,
    slots: {
      donation: {
        component: DonationAmountWidget,
        props: {
          actionUrl: 'https://donorbox.org/embed/sponsor-a-child-vvf',
          sponsorTargetLabel: maria.displayName,
        },
      },
    },
  },
}

export const MinimalData = {
  args: {
    child: { slug: 'jose', displayName: 'Jose', age: 5, published: true },
    slots: {
      donation: {
        component: DonationAmountWidget,
        props: { actionUrl: 'https://donorbox.org/embed/sponsor-a-child-vvf' },
      },
    },
  },
}
