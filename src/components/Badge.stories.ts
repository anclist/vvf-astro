import Badge from './Badge.astro'

export default {
  title: 'Atoms/Badge',
  component: Badge,
}

export const Default = {
  args: { slots: { default: 'March 14, 2026' } },
}
