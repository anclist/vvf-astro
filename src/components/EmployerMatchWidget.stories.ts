import EmployerMatchWidget from './EmployerMatchWidget.astro'

// Takes no props: it reads DTD_PUBLIC_KEY from the environment and always
// falls back to the disabled placeholder when unset, which is the correct
// default to story (no external Double the Donation script load in dev).
export default {
  title: 'Components/EmployerMatchWidget',
  component: EmployerMatchWidget,
}

export const Default = {
  args: {},
}
