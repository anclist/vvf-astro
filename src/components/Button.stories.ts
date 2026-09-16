import Button from './Button.astro'

export default {
  title: 'Atoms/Button',
  component: Button,
}

export const PrimarySky = {
  args: {
    href: '/ways-to-give',
    variant: 'primary-sky',
    slots: { default: 'Donate' },
  },
}

export const OutlineSky = {
  args: {
    href: '/contact',
    variant: 'outline-sky',
    slots: { default: 'Contact Us' },
  },
}

export const PrimaryNavy = {
  args: {
    href: '/events',
    variant: 'primary-navy',
    slots: { default: 'Buy Tickets' },
  },
}

export const OutlineNavy = {
  args: {
    href: '/programs/nutrition',
    variant: 'outline-navy',
    slots: { default: 'Learn More' },
  },
}

export const Small = {
  args: {
    href: '#',
    variant: 'primary-sky',
    size: 'sm',
    slots: { default: 'Bid Now' },
  },
}

export const Submit = {
  args: {
    type: 'submit',
    variant: 'primary-sky',
    size: 'lg',
    slots: { default: 'Send message' },
  },
}

export const Disabled = {
  args: {
    type: 'submit',
    variant: 'primary-sky',
    disabled: true,
    slots: { default: 'Send message' },
  },
}

export const Icon = {
  args: {
    variant: 'icon',
    'aria-label': 'Previous',
    slots: { default: '‹' },
  },
}
