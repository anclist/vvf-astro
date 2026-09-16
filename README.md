# Victoria Venezuela Foundation

Marketing site for Victoria Venezuela Foundation — a nonprofit connecting US donors with children and communities in Venezuela through sponsorship, events, and relief campaigns.

## Stack

- [Astro](https://astro.build) 7, server output, `@astrojs/node` adapter
- [EmDash](https://docs.astro.build/en/guides/cms/emdash/) — self-hosted, database-backed CMS integration (SQLite locally)
- React (for EmDash's admin UI) + Tailwind CSS

## Getting started

### Option 1: Dev container (recommended)

Open the repo in a dev container-capable editor (VS Code, GitHub Codespaces) and reopen in container. It preinstalls Node 22, Playwright's system dependencies, and runs `npm install` for both the root project and `docs-site/` on create. Ports `4321` (site + EmDash admin) and `6006` (Storybook) are forwarded to the host automatically.

```bash
npm run dev
```

### Option 2: Manual setup

```bash
npm install
npm run dev
```

This starts the site at `http://localhost:4321` and the EmDash admin at `http://localhost:4321/_emdash/admin`.

On first run, EmDash creates a local `data.db` and seeds it from [`seed/seed.json`](seed/seed.json) — the site's content schema (collections + fields) and starter content, both version-controlled. `data.db`, `.emdash/`, and `/uploads` are local/generated and gitignored; nothing about them needs to be committed.

## Docs

Full docs (scripts, content model, component library, testing & CI) live in `docs-site/`:

```bash
cd docs-site
npm install
npm run dev
```

Or read the markdown source directly under `docs-site/src/content/docs/`.

## Tooling

- `openspec/` — OpenSpec change proposals and specs for this project
- `.claude/`, `.opencode/` — AI assistant commands/skills used while building this project
