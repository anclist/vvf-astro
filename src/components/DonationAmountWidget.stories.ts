import DonationAmountWidget from './DonationAmountWidget.astro'

export default {
  title: 'Components/DonationAmountWidget',
  component: DonationAmountWidget,
}

export const Default = {
  args: {
    actionUrl: 'https://donorbox.org/general-donation-vvf',
  },
}

export const SponsoringAChild = {
  args: {
    actionUrl: 'https://donorbox.org/embed/sponsor-a-child-vvf',
    sponsorTargetLabel: 'Maria, age 8',
    defaultCadence: 'monthly',
    presets: [30, 60, 90],
  },
}
