import TextArea from './TextArea.astro'

export default {
  title: 'Atoms/TextArea',
  component: TextArea,
}

export const Default = {
  args: {
    rows: 5,
    placeholder: 'Message',
  },
}
