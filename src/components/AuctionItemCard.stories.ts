import AuctionItemCard from './AuctionItemCard.astro'
import type { AuctionItem } from '../lib/content/types'

const item: AuctionItem = {
  name: 'Weekend Golf Getaway for Four',
  estimatedValue: '$1,200',
  bidUrl: 'https://example.org/auction/golf-getaway',
}

export default {
  title: 'Components/AuctionItemCard',
  component: AuctionItemCard,
}

export const Default = {
  args: { item },
}

export const NoBidLink = {
  args: { item: { name: 'Signed Team Jersey', estimatedValue: '$300' } satisfies AuctionItem },
}
