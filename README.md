# The Living Index — Prabhanshu Sharma

Personal portfolio. Neobrutalism theme (neobrutalism.dev, fuchsia palette), built with Next.js, Tailwind CSS v4 and Radix Dialog. Deployed on Vercel: every push to `main` goes live.

## Where things live

| What | File |
| --- | --- |
| All landing-page copy, email and social links | `src/content/site.ts` |
| Projects (card text, results, spread story) | `src/content/projects.ts` |
| Life tiles | `src/content/life.ts` |
| Partners in the “Worked with” rail | `src/content/partners.ts` |
| Project cover graphics | `public/covers/<slug>.svg` (or set `cover` in projects.ts) |
| Partner logos | `public/logos/` (then set `logo` in partners.ts) |
| Where each square sits in the grid | `src/content/layout.ts` |
| Filters and tile colours | `src/content/filters.ts` |
| Theme tokens (palette, shadow, fonts) | `src/app/globals.css` |

- A project's tile colour comes from its **first filter**.
- `featured: true` puts the “Now featured” sticker on a project (keep it on the topmost one).
- Hovering a project tile breaks the solid block into squares that drop away to reveal its cover graphic.
- Each project spread must stay under a **2-minute read** (≈440 words). The build prints a warning for any project over budget.
- Projects open as a pop-up from the grid and also have their own URL, e.g. `/work/visual-bypass`.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```
