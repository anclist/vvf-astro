import TextField from './TextField.astro'

export default {
  title: 'Atoms/TextField',
  component: TextField,
}

export const Default = {
  args: {
    placeholder: 'Enter your email',
  },
}

export const Required = {
  args: {
    required: true,
    placeholder: 'First name',
  },
}
