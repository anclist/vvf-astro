/** @type {import('tailwindcss').Config} */
// Tokens approximated from Victoria Venezuela Foundation.pdf (Figma export)
// screenshots. Swap for exact hex values if the original Figma file's
// variables become available.
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0B2C52',
          'navy-dark': '#081F3A',
          sky: '#29A9E1',
          'sky-dark': '#1C8CC0',
        },
        pastel: {
          yellow: '#F7E7B4',
          pink: '#F8D6DC',
          blue: '#CFE9F7',
        },
        ink: {
          900: '#0F172A',
          700: '#334155',
          500: '#64748B',
        },
      },
      fontFamily: {
        display: ['"Baloo 2"', 'system-ui', '-apple-system', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        eyebrow: ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.1em' }],
        'display-sm': ['1.75rem', { lineHeight: '2.25rem' }],
        'display-md': ['2.25rem', { lineHeight: '2.5rem' }],
        'display-lg': ['3rem', { lineHeight: '1.1' }],
        'display-xl': ['3.75rem', { lineHeight: '1.05' }],
        stat: ['2.5rem', { lineHeight: '1' }],
      },
      borderRadius: {
        pill: '999px',
        card: '1.5rem',
      },
      maxWidth: {
        container: '80rem',
      },
      spacing: {
        section: '5rem',
        'section-sm': '3rem',
      },
    },
  },
  plugins: [],
}
