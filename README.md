# Barrel 37 — Speakeasy & Whisky Bar

Marketing site for Barrel 37, a speakeasy and whisky bar in Kraków Kazimierz.
Fully bilingual (English / Polish), with a palate-based drink selector and
table reservations.

## Features

- **Bilingual layouts** — English and Polish throughout
- **Palate selector** — browse the whisky menu by taste profile
- **Table reservations** — customisable booking flow
- **Sections** — hero, about, menu, ambience, events, find-us
- **Admin panel** — manage reservations and content

## Stack

React 19 · Vite · Tailwind CSS 4 · TypeScript · Motion · Lucide

## Running locally

**Prerequisites:** Node.js 18+

```bash
npm install
cp .env.example .env    # then fill in the values
npm run dev             # http://localhost:3000
```

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Vite dev server on port 3000 |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve the production build |
| `npm run lint` | Typecheck (`tsc --noEmit`) |

## Configuration

Secrets are read from the environment. Copy `.env.example` to `.env` and
populate it — `.env` is gitignored and must never be committed.

## Note on assets

Some image files under `src/assets/images/` still carry `qitchen_*` filenames
from the starter template this project was built on. The rendered content is
Barrel 37's own; only the filenames are stale.
