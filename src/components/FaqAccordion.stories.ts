import { expect } from 'storybook/test'
import FaqAccordion from './FaqAccordion.astro'
import type { Faq } from '../lib/content/types'

const faqs: Faq[] = [
  {
    question: 'How does child sponsorship work?',
    answer: 'Your monthly gift funds meals, school supplies, and medical care for one specific child.',
    category: 'sponsorship',
  },
  {
    question: 'Is my donation tax-deductible?',
    answer: 'Yes. Victoria Venezuela Foundation is a 501(c)(3), and contributions are tax-deductible.',
    category: 'donation',
  },
  {
    question: 'Can I sponsor a table at the golf tournament?',
    answer: 'Yes, sponsorship packages are available on the event page.',
    category: 'tournament',
  },
]

export default {
  title: 'Molecules/FaqAccordion',
  component: FaqAccordion,
}

export const Default = {
  args: { faqs },
  play: async ({ canvasElement }) => {
    const details = canvasElement.querySelector('details') as HTMLDetailsElement
    const summary = details.querySelector('summary') as HTMLElement

    expect(details.open).toBe(false)

    summary.click()
    expect(details.open).toBe(true)

    summary.click()
    expect(details.open).toBe(false)
  },
}
