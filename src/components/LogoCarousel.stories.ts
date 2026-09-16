import { within } from 'storybook/test'
import LogoCarousel from './LogoCarousel.astro'
import type { LogoItem } from './LogoCarousel.astro'

const logos: LogoItem[] = [
  { name: 'Acme Corp' },
  { name: 'Northwind Traders' },
  { name: 'Globex' },
  { name: 'Initech' },
  { name: 'Umbrella Foundation' },
  { name: 'Wayne Enterprises' },
]

export default {
  title: 'Components/LogoCarousel',
  component: LogoCarousel,
}

export const Default = {
  args: { logos },
  // @storybook-astro/framework mounts story markup via innerHTML, so the
  // client <script> driving next/prev never executes here — only the
  // static render is checked. Scroll math is covered by
  // src/lib/carousel.test.ts.
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    canvas.getByRole('button', { name: 'Next logos' })
    canvas.getByRole('button', { name: 'Previous logos' })
  },
}
