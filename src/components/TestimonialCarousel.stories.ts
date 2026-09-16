import { expect, within } from 'storybook/test'
import TestimonialCarousel from './TestimonialCarousel.astro'
import type { TestimonialItem } from './TestimonialCarousel.astro'

const items: TestimonialItem[] = [
  {
    title: 'Maria’s Story',
    body: 'Sponsorship meant Maria could finally focus on school instead of worrying about her next meal.',
  },
  {
    title: 'A Volunteer’s Perspective',
    body: 'Seeing the impact firsthand changed how I think about giving.',
  },
  {
    title: 'A Sponsor’s Note',
    body: 'Three years of letters back and forth, and watching a child grow up.',
  },
]

export default {
  title: 'Components/TestimonialCarousel',
  component: TestimonialCarousel,
}

export const Default = {
  args: { items },
  // @storybook-astro/framework mounts story markup via innerHTML, so the
  // client <script> driving next/prev never executes here — only the
  // static render is checked. Scroll math is covered by
  // src/lib/carousel.test.ts.
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    canvas.getByRole('button', { name: 'Next story' })
    canvas.getByRole('button', { name: 'Previous story' })
    const dots = canvasElement.querySelectorAll('[data-dot]')

    expect(dots).toHaveLength(items.length)
  },
}
