import NewsletterSignup from './NewsletterSignup.astro'

export default {
  title: 'Components/NewsletterSignup',
  component: NewsletterSignup,
}

export const Default = {
  args: {},
}

export const CustomHeading = {
  args: { heading: 'Get monthly updates from the field' },
}
