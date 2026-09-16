---
title: Component Library
description: Where components live and how the atomic-design tiers are organized.
---

All 28 components live flat in [`src/components/`](https://github.com/anclist/vvf-astro/tree/main/src/components) — there are no physical `atoms/`, `molecules/`, `organisms/` subfolders on disk. The atomic-design tiering exists only as Storybook `title:` metadata on each component's `.stories.ts` file.

## Tiers

| Tier | Components |
| --- | --- |
| Atoms | AnnouncementBanner, Badge, Button, Card, Eyebrow, TeamMemberCard, TextArea, TextField |
| Molecules | AuctionItemCard, BlogCard, ChildCard, ContactForm, DonationAmountWidget, EmployerMatchWidget, EventCard, FaqAccordion, ImpactBanner, LogoCarousel, NewsletterSignup, PastelCard, SponsorshipTierTable, StatTileRow, TicketCard, TestimonialCarousel |
| Organisms | ChildProfile, Footer, Header, Hero |

`TeamMemberCard` is filed under Atoms in Storybook despite being a "Card" component like the Molecules-tier cards — double-check with the team before assuming it's intentional rather than a miscategorization.

## Browsing components

```bash
npm run storybook
```

Opens Storybook at `http://localhost:6006` with live examples, controls, and docs for every component. There is currently no hosted/deployed Storybook (no Chromatic or Pages step in CI), so this is a local-only workflow for now.
