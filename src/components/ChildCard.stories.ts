import ChildCard from './ChildCard.astro'
import type { ChildItem } from '../lib/content/types'

const jose: ChildItem = {
  slug: 'jose',
  displayName: 'Jose',
  age: 6,
  published: true,
}

export default {
  title: 'Molecules/ChildCard',
  component: ChildCard,
}

export const Default = {
  args: { child: jose },
}
