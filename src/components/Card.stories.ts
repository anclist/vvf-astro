import Card from './Card.astro'

export default {
  title: 'Atoms/Card',
  component: Card,
}

export const White = {
  args: {
    class: 'p-6',
    slots: { default: 'White card, shadowed by default' },
  },
}

export const Yellow = {
  args: {
    tone: 'yellow',
    class: 'p-6',
    slots: { default: 'Pastel yellow card' },
  },
}

export const Pink = {
  args: {
    tone: 'pink',
    class: 'p-6',
    slots: { default: 'Pastel pink card' },
  },
}

export const Blue = {
  args: {
    tone: 'blue',
    class: 'p-6',
    slots: { default: 'Pastel blue card' },
  },
}

export const OverflowHiddenWithImage = {
  args: {
    overflowHidden: true,
    slots: { default: '<div class="h-32 bg-gray-200"></div><div class="p-4">Card with clipped image area</div>' },
  },
}
