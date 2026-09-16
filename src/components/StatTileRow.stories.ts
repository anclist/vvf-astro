import StatTileRow from './StatTileRow.astro'
import type { Stat } from './StatTileRow.astro'

const stats: Stat[] = [
  { value: '1,200', label: 'Children sponsored' },
  { value: '48', label: 'Partner schools' },
  { value: '$2.1M', label: 'Raised this year' },
  { value: '15', label: 'Years of service', caption: 'Since 2011' },
]

export default {
  title: 'Molecules/StatTileRow',
  component: StatTileRow,
}

export const Default = {
  args: { stats },
}
