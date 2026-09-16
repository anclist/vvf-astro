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
}
