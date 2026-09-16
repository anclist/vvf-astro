---
title: Styling & Design Tokens
description: The design tokens defined in tailwind.config.cjs and when to use them.
---

All design tokens live in [`tailwind.config.cjs`](https://github.com/anclist/vvf-astro/blob/main/tailwind.config.cjs) under `theme.extend`. Use these instead of arbitrary Tailwind values or hardcoded hex codes — they're the only source of truth for the site's visual language (approximated from the Victoria Venezuela Foundation Figma export; swap for exact values if the original Figma variables become available).

## Colors

| Scale | Tokens | Use |
| --- | --- | --- |
| `brand` | `brand-navy` (`#0B2C52`), `brand-navy-dark` (`#081F3A`), `brand-sky` (`#29A9E1`), `brand-sky-dark` (`#1C8CC0`) | Primary brand colors — headers, CTAs, links |
| `pastel` | `pastel-yellow` (`#F7E7B4`), `pastel-pink` (`#F8D6DC`), `pastel-blue` (`#CFE9F7`) | Soft backgrounds, e.g. `PastelCard` |
| `ink` | `ink-900` (`#0F172A`), `ink-700` (`#334155`), `ink-500` (`#64748B`) | Body text, from darkest to lightest |

Example: `class="bg-brand-navy text-white"`, not `class="bg-[#0B2C52] text-white"`.

## Typography

- **Font families**: `font-display` (`"Baloo 2"`) for headings/display text, `font-sans` (`Inter`) for body text — both fall back to `system-ui`.
- **Font sizes**: `text-eyebrow` (small caps-style labels), `text-display-sm`/`display-md`/`display-lg`/`display-xl` (heading scale, smallest to largest), `text-stat` (large numeric callouts, e.g. `StatTileRow`). Each bakes in its own line-height (and letter-spacing for `eyebrow`) — don't pair with a separate `leading-*` utility.

## Radii & spacing

- `rounded-pill` (`999px`) for pill-shaped buttons/badges, `rounded-card` (`1.5rem`) for card surfaces.
- `max-w-container` (`80rem`) for page-width containers.
- `p-section`/`py-section` (`5rem`) and `p-section-sm`/`py-section-sm` (`3rem`) for vertical section spacing — use these instead of ad-hoc `py-*` values so section rhythm stays consistent across pages.
