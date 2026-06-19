# Portfolio / CV

A fast, mobile-first, single-page portfolio/CV for a Senior Frontend Software Developer.
Built with React + TypeScript + Vite and plain CSS — no UI framework, no unnecessary
dependencies.

## Highlights

- Content-first, recruiter-friendly CV layout
- Mobile-first responsive design with system fonts
- Semantic, accessible markup (focus-visible states, reduced-motion support, correct heading hierarchy)
- Static SEO metadata: title, description, canonical, Open Graph, Twitter, and JSON-LD `Person` schema
- All content lives in a single typed source: [`src/data/profile.ts`](src/data/profile.ts)

## Tech Stack

- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- Plain CSS with custom properties (design tokens)

## Project Structure

```
index.html              SEO metadata + JSON-LD structured data
vercel.json             Vercel build/headers config
src/
  main.tsx              App entry
  App.tsx               Composes all sections
  types.ts              Data model interfaces
  data/profile.ts       Single source of truth for content
  styles/global.css     Reset, tokens, typography, a11y
  components/           One component per CV section + small shared pieces
```

## Run Locally

Requires Node.js 18+.

```bash
npm install
npm run dev
```

Open the printed local URL (default http://localhost:5173).

## Build & Preview

```bash
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build locally
```

## Deploy to Vercel

This project is Vercel-ready.

**Option A — Dashboard**

1. Push this repository to GitHub/GitLab/Bitbucket.
2. In Vercel, click **Add New → Project** and import the repository.
3. Vercel auto-detects Vite (Framework Preset: **Vite**, Build Command: `npm run build`,
   Output Directory: `dist`). The included `vercel.json` already sets these.
4. Click **Deploy**.

**Option B — Vercel CLI**

```bash
npm i -g vercel
vercel          # preview deployment
vercel --prod   # production deployment
```

After your first deploy, update the canonical/Open Graph URLs in
[`index.html`](index.html) to your real domain.

## Editing Content

Update [`src/data/profile.ts`](src/data/profile.ts) — all sections render from this typed
data, so no component edits are needed for content changes.
