import TicketCard from './TicketCard.astro'

export default {
  title: 'Components/TicketCard',
  component: TicketCard,
}

export const Individual = {
  args: {
    tierName: 'Individual Golfer',
    price: '$250',
    features: ['18 holes', 'Lunch included', 'Swag bag'],
    href: 'https://donorbox.org/embed/golf-tournament-individual',
    tone: 'blue',
  },
}

export const Foursome = {
  args: {
    tierName: 'Foursome',
    price: '$900',
    features: ['4 golfers', '18 holes each', 'Lunch included', 'Team signage'],
    href: 'https://donorbox.org/embed/golf-tournament-foursome',
    tone: 'yellow',
  },
}
