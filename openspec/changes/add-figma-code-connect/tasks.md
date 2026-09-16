## 0. Confirm blocking prerequisites

- [ ] 0.1 Confirm the VVF Figma account is on an Organization or Enterprise plan with a Dev Mode seat (Code Connect doesn't work on Starter/Professional)
- [ ] 0.2 Confirm the components at the linked Figma file are published to a Figma team library (Code Connect only maps published components, not arbitrary nodes)
- [ ] 0.3 Obtain a valid Figma personal access token as `FIGMA_ACCESS_TOKEN` (the CLI's actual env var, confirmed in task 1.2) — the token this design assumed was usable (`FIGMA_TOKEN`) returned `401 Invalid token` against Figma's API
- [ ] 0.4 Authorize the Figma MCP server (`plugin:figma:figma`) so `get_code_connect_suggestions`/`get_context_for_code_connect` are available for authoring templates

## 1. Install and configure the Code Connect CLI

- [x] 1.1 Add `@figma/code-connect` as a dev dependency and verify `npx figma connect --help` runs
- [x] 1.2 Run the CLI's `--help` (auth/publish/create subcommands) to confirm the exact env var or flag it expects for a Figma personal access token, and verify an authenticated call succeeds using the token already available locally
  - Confirmed: CLI reads `FIGMA_ACCESS_TOKEN` from the environment (or `-t/--token` flag) — not the `FIGMA_TOKEN` this design originally assumed. Authenticated call still blocked on 0.3 (need a valid token).
- [ ] 1.3 Add `figma.config.json` per the CLI's own scaffolding guidance and verify the CLI recognizes it (e.g. a dry-run or parse command succeeds against it) — must avoid the deprecated `parser` field/react auto-detection (v2 is template-file only, see design.md)

## 2. Prove the approach with one pilot mapping

- [ ] 2.1 Pick one component (`Button`), use the Figma MCP (`get_code_connect_suggestions` / `get_context_for_code_connect`) to find its node and property definitions in the [VVF Figma file](https://www.figma.com/design/OmhlZGf62gF6diGPJeMJ4N/Victoria-Venezuela-Foundation), and author `src/components/Button.figma.ts` as a v2 template file (`figma.code` tagged template, per design.md — never `.figma.tsx`), mapping each Figma property to `Button.astro`'s actual `Props` interface
- [ ] 2.2 Publish it with `figma connect publish` and verify the CLI reports success for that node
- [ ] 2.3 Confirm with a teammate (or visually, in Figma Dev Mode) that the Button node now shows this repo's code — this closes the loop the whole change depends on before mapping the rest

## 3. Map and publish the remaining components

For each component below: find its Figma node via the MCP, author `ComponentName.figma.ts` (design.md's v2 template pattern), publish, and check it off only once the node is confirmed mapped.

- [ ] 3.1 Badge
- [ ] 3.2 Card
- [ ] 3.3 PastelCard
- [ ] 3.4 Eyebrow
- [ ] 3.5 TextField
- [ ] 3.6 TextArea
- [ ] 3.7 Header
- [ ] 3.8 Footer
- [ ] 3.9 Hero
- [ ] 3.10 EventCard
- [ ] 3.11 ChildCard
- [ ] 3.12 ChildProfile
- [ ] 3.13 TicketCard
- [ ] 3.14 TeamMemberCard
- [ ] 3.15 BlogCard
- [ ] 3.16 AuctionItemCard
- [ ] 3.17 AnnouncementBanner
- [ ] 3.18 LogoCarousel
- [ ] 3.19 TestimonialCarousel
- [ ] 3.20 StatTileRow
- [ ] 3.21 ImpactBanner
- [ ] 3.22 NewsletterSignup
- [ ] 3.23 ContactForm
- [ ] 3.24 EmployerMatchWidget
- [ ] 3.25 DonationAmountWidget
- [ ] 3.26 FaqAccordion
- [ ] 3.27 SponsorshipTierTable

## 4. Document the setup and update workflow

- [ ] 4.1 Add a "Figma Code Connect" section to `README.md` and the docs-site Getting Started page (matching the Basecamp CLI section's pattern): install, token/auth step, and how to add or update one mapping
- [ ] 4.2 Add a note to `AGENTS.md`: when a mapped component's props or markup change, re-run `figma connect publish` for it so Dev Mode doesn't drift from the real component

## 5. Final verification

- [ ] 5.1 Run `npm run build` and confirm the production build is unaffected by the presence of `*.figma.ts` files (same routes/output as before)
- [ ] 5.2 Confirm full coverage: every `.astro` file in `src/components/` has a matching `*.figma.ts`, and the CLI's publish output (or a `figma connect` list/status equivalent) accounts for all of them
