import ContactForm from './ContactForm.astro'

export default {
  title: 'Components/ContactForm',
  component: ContactForm,
}

export const Default = {
  args: {},
}

export const PreselectedTopic = {
  args: { defaultTopic: 'corporate-partnerships' },
}
