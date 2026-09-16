## Why

The VVF site's design lives in Figma; the code lives here as 28 Astro components (`src/components/`, each with a Storybook story). Today nothing connects the two: Figma's Dev Mode shows auto-generated code guesses instead of this repo's real components, and there's no way to tell, from a Figma node, which component implements it. Figma Code Connect closes that loop — it lets Figma Dev Mode display this repo's actual component usage and props for a selected node, so design and build stay traceable as both evolve.

## What Changes

- Add `@figma/code-connect` as a dev dependency and a `figma.config.json` pointing at this repo.
- Author a Code Connect mapping for each of the 28 components in `src/components/`, linking it to its node in the [VVF Figma file](https://www.figma.com/design/OmhlZGf62gF6diGPJeMJ4N/Victoria-Venezuela-Foundation).
- Publish those mappings to Figma (`figma connect publish`) so Dev Mode shows this repo's real code for each mapped node.
- Document the local setup (Figma personal access token, how to add/update a mapping, when to re-publish) so mappings don't silently drift from the components they describe.
- Out of scope for this change: generating or updating component code from Figma designs (design-to-code). This change only binds what already exists in code to its Figma counterpart.

## Capabilities

### New Capabilities
- `figma-code-connect`: the mapping between this repo's component library and their Figma nodes, published and kept current via the Code Connect CLI.

### Modified Capabilities
(none)

## Impact

- New dev dependency: `@figma/code-connect`.
- New files: `figma.config.json`, one Code Connect mapping file per mapped component.
- Requires a Figma personal access token with access to the VVF file (already available locally as an env var on this machine; never committed, documented as a setup step for other contributors).
- No change to any component's runtime behavior or the production build — Code Connect files are Dev Mode metadata only, not part of the Astro build.
