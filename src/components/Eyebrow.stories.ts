import Eyebrow from './Eyebrow.astro'

export default {
  title: 'Atoms/Eyebrow',
  component: Eyebrow,
}

export const Navy = {
  args: { slots: { default: 'Our Mission' } },
}

export const Sky = {
  args: { color: 'sky', slots: { default: 'Making an Impact' } },
}

export const Ink = {
  args: { color: 'ink', slots: { default: 'Recognition' } },
}
