# Victoria Venezuela Foundation

Marketing site for Victoria Venezuela Foundation — a nonprofit connecting US donors with children and communities in Venezuela through sponsorship, events, and relief campaigns.

## Stack

- [Astro](https://astro.build) 7, server output, `@astrojs/node` adapter
- [EmDash](https://docs.astro.build/en/guides/cms/emdash/) — self-hosted, database-backed CMS integration (SQLite locally)
- React (for EmDash's admin UI) + Tailwind CSS

## Getting started

```bash
npm install
npm run dev
```

This starts the site at `http://localhost:4321` and the EmDash admin at `http://localhost:4321/_emdash/admin`.

On first run, EmDash creates a local `data.db` and seeds it from [`seed/seed.json`](seed/seed.json) — the site's content schema (collections + fields) and starter content, both version-controlled. `data.db`, `.emdash/`, and `/uploads` are local/generated and gitignored; nothing about them needs to be committed.

## Scripts

```bash
npm run dev       # Dev server
npm run build     # Production build (dist/)
npm run preview   # Serve the production build locally
npm run seed      # Re-apply seed/seed.json to the local database
```

## Content model

All content is read through one adapter, `src/lib/content/index.ts`, which wraps EmDash's `getEmDashCollection`/`getEmDashEntry` and returns the normalized shapes in `src/lib/content/types.ts`. Pages and components never query EmDash directly.

Collections (defined in `seed/seed.json`): `events`, `children` (sponsorship profiles), `team_members`, `posts` (blog), `sponsors`, `sponsorship_packages`, `auction_items`, `faqs`, `campaign_updates`, `campaign_settings` (singleton).

To change the schema or seed content: edit `seed/seed.json`, then `npm run seed` (or just restart the dev server — EmDash auto-seeds on boot if the database doesn't have content yet).

## Environment

No environment variables are required for local dev — see `.env.example`. Production deploy target (hosting, database, media storage) has not been decided yet; local dev uses SQLite and local disk.

## Project structure

```
src/
  pages/          Astro pages/routes
  components/      Astro components
  layouts/         Page layout + shared chrome
  lib/content/     Content adapter + normalized types (see above)
  lib/donorbox.ts  Donorbox embed/link helpers
seed/seed.json     EmDash schema + seed content (source of truth for content)
public/            Static assets
```

## Tooling

- `openspec/` — OpenSpec change proposals and specs for this project
- `.claude/`, `.opencode/` — AI assistant commands/skills used while building this project
