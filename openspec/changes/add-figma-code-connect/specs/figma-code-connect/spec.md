## Purpose

Keeps every component in this repo's `src/components/` library mapped to its Figma node, so Figma's Dev Mode shows real, current code for each design element instead of a generic guess.

## ADDED Requirements

### Requirement: Every component has a published Code Connect mapping
Each component in `src/components/` SHALL have a Code Connect mapping published to the VVF Figma file's matching node.

#### Scenario: Designer inspects a mapped node in Figma Dev Mode
- **WHEN** a designer or developer selects a Figma node that has a published Code Connect mapping
- **THEN** Figma's Dev Mode panel shows this repo's actual component usage and props for that node, not an auto-generated guess

#### Scenario: New component added without a mapping
- **WHEN** a new component is added to `src/components/` but has no Code Connect mapping yet
- **THEN** its corresponding Figma node (once known) continues to show Figma's default Dev Mode output until a mapping is authored and published for it

### Requirement: Local Code Connect setup is documented
The project's setup documentation SHALL describe how a contributor authenticates the Code Connect CLI locally and publishes or updates a mapping, since credentials aren't shared through the repo.

#### Scenario: Contributor updates a component and its mapping
- **WHEN** a contributor changes a mapped component's props or usage and needs to update its Figma mapping
- **THEN** the setup docs tell them how to authenticate and run the publish command, without needing to ask a teammate

### Requirement: Figma credentials never committed to the repo
Any Figma personal access token or Code Connect credential SHALL be supplied via a local environment variable or the CLI's own local config, never committed to version control.

#### Scenario: Contributor runs the publish command
- **WHEN** a contributor publishes or updates a Code Connect mapping
- **THEN** no token or credential file used for that publish is tracked by git in this repo

### Requirement: No production runtime impact
Code Connect mapping files SHALL NOT affect the Astro site's production build, bundle, or runtime behavior.

#### Scenario: Production build after adding mappings
- **WHEN** `npm run build` runs after Code Connect mappings have been added
- **THEN** the build output is unaffected by their presence — same routes, same bundle behavior as before mappings existed
