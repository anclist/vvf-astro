---
name: astro
description: Use when writing or modifying Astro components, pages, content collections, integrations, or any Astro-specific code. Covers .astro file syntax, content collection schemas, integration setup, and Astro API patterns.
---

# Astro Conventions

## Component syntax

`.astro` files use frontmatter + HTML template syntax, not JSX.

- Component expressions: `{expression}`
- HTML attributes: `kebab-case` (e.g. `client:load`, `define:vars`)
- Conditional rendering: `{condition && <p>...</p>}` or `{condition ? <p>...</p> : <p>...</p>}`
- Iteration: `{items.map(item => <li>{item}</li>)}`

Props are defined via `interface Props` in the frontmatter, not function parameters:

```astro
---
interface Props {
  title: string;
  count?: number;
}
const { title, count = 0 } = Astro.props;
---
<h1>{title}</h1>
```

## Content collections

Collections require a schema in `src/content/config.ts`. Collections without a schema fail at build.

```ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
  }),
});

export const collections = { blog };
```

Use `getCollection()` to query, not the deprecated `Astro.glob()`.

## Integrations

Use `astro add` for official integrations (e.g. `npx astro add tailwind`, `npx astro add react`). Do not edit `package.json` manually — the CLI handles dependency installation and config updates.

## Deprecated patterns

- `Astro.glob()` — use `getCollection()` for content or `import.meta.glob()` for files
- `class:list` — use `class:list` (still supported, but `classList` is standard)

## Background mode

Astro v7+ runs the dev server as a background process when an AI coding agent is detected. Lock file at `.astro/dev.json`. Opt out: `ASTRO_DEV_BACKGROUND=0 npm run dev`. Health check: `GET /_astro/status`.
