# AGENTS.md

## Astro MCP

This project has the Astro Docs MCP server configured in `opencode.json`. Use it to query live Astro documentation — do not rely on stale training data for Astro APIs.

## Dev commands

```bash
npm run dev       # Start dev server (background when AI agent detected)
npm run build     # Production build
npm run preview   # Preview production build
```

## Basecamp ticketing

Requirements for this project come from cards on the VVF project's "Tareas" board in Basecamp (`basecamp cards list -p 43742602`, once authenticated via `basecamp auth login` — see README.md). Convention:

- Starting an openspec change to implement a specific card: put that card's Basecamp URL in the change's `proposal.md` (Why or Impact section).
- Archiving that change: run `basecamp cards done <id|url>` on the same card so it closes in Basecamp.

There's no automatic sync — both steps are manual, done by whoever is driving the change.

## Skills

- **astro** — Astro component syntax, content collections, integrations, and API patterns. Use when writing or modifying any Astro-specific code.
