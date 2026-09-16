## Context

See proposal.md - Why. This repo has 28 Astro components in `src/components/`, each already co-located with a `.stories.ts` Storybook file (`@storybook-astro/framework`).

Confirmed during implementation (installed `@figma/code-connect@2.0.1`, the current major version): Code Connect v2 dropped framework-specific parsers (React/SwiftUI/Compose) entirely in favor of **template files** — a `ComponentName.figma.ts` file (never `.figma.tsx`) whose default export uses a `` figma.code`...` `` tagged template, populated from `instance.getString()/getEnum()/getBoolean()/...` calls rather than a statically-parsed component. This is framework-agnostic by design (v2's only supported path for everyone, not a workaround for Astro specifically), which fits this repo's `.astro` components without a special case.

Two tool surfaces are in play, per the request to review both:
- **Figma MCP** (`plugin:figma:figma`, the Dev Mode MCP server — separate from the general-purpose `use_figma` design tools) — provides `get_code_connect_suggestions` and `get_context_for_code_connect`, used while authoring each template to find the right node and its property definitions. Requires its own OAuth connection (not yet authorized as of this design).
- **Figma Code Connect CLI** (`@figma/code-connect`, installed) — the system of record: `figma connect create` scaffolds a template from a Figma node URL, `figma connect publish` pushes templates to Figma so Dev Mode picks them up.

**Confirmed prerequisites this design depends on** (per Code Connect's own docs, not yet verified against the VVF Figma account):
- Code Connect requires an **Organization or Enterprise** Figma plan with a Dev Mode seat — it does not work on Starter/Professional.
- Components must already be **published to a Figma team library** — Code Connect maps to published components, not arbitrary frame/layer nodes.
- The local `FIGMA_TOKEN` env var this design assumed was available returned `401 Invalid token` against Figma's API when checked — it needs to be replaced with a valid one before any publish step can run.

## Goals / Non-Goals

**Goals:**
- All 28 components in `src/components/` have a hand-authored, published Code Connect mapping to their Figma node.
- A contributor can add or update one component's mapping locally without depending on Storybook (which has known gaps — build-storybook is broken, the storybook-astro framework can't run component scripts).

**Non-Goals:**
- No design-to-code generation (per proposal) — mappings describe existing components, they don't produce new ones.
- No CI-triggered auto-publish. Publishing stays a manual, on-demand step for this change; the team is small enough that this is simpler to run than to automate, and CI wiring would need the Figma token as a stored secret with more moving parts than the workflow currently needs.

## Decisions

**Mapping files: hand-authored `ComponentName.figma.ts` template files, co-located with each component.**
Follows the repo's existing convention of colocating `ComponentName.stories.ts` next to `ComponentName.astro`. Each file is a Code Connect v2 template (`figma.code` tagged template, never `.figma.tsx`/`figma.connect()` — that's the deprecated parser-based v1 format) whose props are read from Figma via `get_context_for_code_connect` and mapped to the component's actual props (read from the `.astro` file's frontmatter `Props` interface, not invented).
Alternative considered: a separate top-level `figma/` directory holding all mapping files. Rejected — splits a component's design/code/story/mapping across two locations for no benefit here.

**Node linking: manual, one Figma node per component, tracked as a tasks.md checklist.**
Code Connect has no reliable way to auto-match 28 Astro components to Figma nodes by name. Each mapping's target node URL is captured by hand from the Figma file (starting from the shared link's frame, node-id `4506-635`), and a component's task isn't marked done until its specific node link is confirmed and Dev Mode is verified to show the right code for it.

**Auth: Figma personal access token via environment, not committed.**
The Code Connect CLI authenticates via a token read from the environment (exact expected variable name confirmed by running the installed CLI's own `--help` during tasks, not assumed here) or a `--token` flag. A token already exists locally for this project; docs tell other contributors how to get their own and never to commit one.

**Publish cadence: manual, on-demand.**
`figma connect publish` is run locally after adding or updating mappings. No CI automation in this change (Non-Goals) — revisited only if manual publish starts getting skipped in practice.

## Risks / Trade-offs

- [Astro isn't a Code Connect-parsed framework] → moot under v2 — every framework is hand-authored via template files (Decision 1), not just Astro; verified in tasks by publishing at least one mapping and confirming Figma Dev Mode renders it correctly.
- [28 components is a lot of manual node-linking; easy to mis-map or skip one] → tasks.md tracks one line per component, each only checked off once its specific node is confirmed in Dev Mode.
- [Figma personal access token is a sensitive credential] → never printed, embedded in a mapping file, or committed; read from the environment only at publish time.
- [Manual publish can silently drift from component changes over time] → accepted for this change's scale (Non-Goals); documented as a step to remember when a mapped component's props or markup change.
- [Code Connect requires an Organization/Enterprise Figma plan and components already published to a team library — neither confirmed for the VVF account as of this design] → blocks every task past initial CLI install until confirmed; see tasks.md section 0.
- [The `FIGMA_TOKEN` this design assumed was usable returned `401 Invalid token`] → needs a fresh token before auth/publish steps can proceed; see tasks.md section 0.
