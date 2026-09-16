import BlogCard from './BlogCard.astro'
import type { PostItem } from '../lib/content/types'

const post: PostItem = {
  slug: 'meals-that-matter',
  title: 'Meals That Matter: A Year of School Lunches',
  publishedAt: '2026-02-10',
  category: 'Stories',
  excerpt: 'How our partner schools turned a small meal program into a full year of consistent nutrition.',
}

export default {
  title: 'Molecules/BlogCard',
  component: BlogCard,
}

export const Default = {
  args: { post },
}
