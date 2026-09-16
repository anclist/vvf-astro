import Header from './Header.astro'

// Header takes no props: it calls getPrimaryMenu() (live emdash/sqlite query)
// and generalDonationUrl() directly in its frontmatter. The nav data is
// swapped for a static fixture via the Vite alias in .storybook/main.ts
// (see .storybook/mocks/content.ts) so this never needs a live DB.
export default {
  title: 'Organisms/Header',
  component: Header,
}

export const Default = {
  args: {},
}
