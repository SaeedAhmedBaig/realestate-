# Asif Developer — Luxury Real Estate

A luxury real-estate landing page for **Asif Developer**, built with the Next.js App Router. Bronze / tan / ink design system with full light & dark mode, a background-video hero, animated figures, and a fully responsive layout.

## Tech stack

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **Tailwind CSS 4** (semantic design tokens)
- **next-themes** — light / dark mode
- **motion** — scroll & count-up animations
- **embla-carousel** — property carousel
- **Radix UI** primitives + **lucide-react** icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |

## Deploy

Optimised for [Vercel](https://vercel.com) — import the repository and deploy with the default Next.js settings.

## Project structure

```
app/                 App Router entry, layout, global styles
components/site/      Page sections (hero, services, benefits, footer…)
components/ui/        Reusable UI primitives (button, input, badge)
lib/                 Content data + utilities
public/media/        Hero background video
```
