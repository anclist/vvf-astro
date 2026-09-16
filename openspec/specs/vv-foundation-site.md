# Victoria Venezuela Foundation Site

## Project Specifications

### Architecture
- **Framework**: Astro 5.x with React integration
- **Rendering**: Static generation with hybrid SSR for dynamic content
- **Design System**: Custom Catalyst-based component library
- **CMS**: Astro Content Collections + optional headless CMS adapter

### Tech Stack
```json
{
  "dependencies": {
    "astro": "^5.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "@astrojs/react": "^4.0.0",
    "tailwindcss": "^3.4.0",
    "@headlessui/react": "^2.0.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "typescript": "^5.4.0"
  }
}
```

### Content Model
- **Pages**: Home, About, Programs, News/Events, Get Involved, Contact
- **CMS Collections**:
  - `news`: Blog posts, announcements
  - `events`: Upcoming events with dates
  - `team`: Staff and board members
  - `programs`: Program listings
  - `resources`: Downloads, guides

### Component Library
- **Atoms**: Buttons, cards, typography, icons
- **Molecules**: Header navigation, footer, cards, forms
- **Organisms**: Hero sections, featured content, grid layouts
- **Pages**: Home page template, news listing, event page

### Design System
- **Mobile-first**: Breakpoints at 640px, 768px, 1024px, 1280px
- **Theme**: Venezuela flag colors (yellow, blue, red) as custom variables
- **Accessibility**: WCAG 2.1 AA compliance
- **Performance**: < 100KB Lighthouse score target

### Implementation Phases
1. Setup Astro project with React and Tailwind
2. Define content collection schemas
3. Build core component library (button, card, nav)
4. Create page templates
5. Integrate CMS for content management
6. Mobile optimization and testing
