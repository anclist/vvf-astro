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
}
