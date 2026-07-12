# sean-yap.github.io

Personal site documenting my transition from **business analyst → product &
technical**, and showcasing the problems I solve with code.

Built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com),
deployed to GitHub Pages.

## Quick start

```bash
npm install      # one-time: install dependencies
npm run dev      # start local dev server at http://localhost:4321
```

Then open the printed URL. Edits to any file refresh the page instantly.

## Common commands

| Command           | What it does                                  |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Local dev server with live reload             |
| `npm run build`   | Production build into `dist/`                 |
| `npm run preview` | Preview the production build locally          |

## Where things live

| Path                       | What it is                                  |
| -------------------------- | ------------------------------------------- |
| `src/config.ts`            | Your name, links, nav — **edit this first** |
| `src/data/timeline.ts`     | The transition timeline                     |
| `src/data/projects.ts`     | Project cards                               |
| `src/content/blog/`        | Blog posts (Markdown)                       |
| `src/pages/`               | Pages (home, about, blog, 404)              |
| `src/components/`          | Reusable UI pieces                          |
| `src/styles/global.css`    | Theme + accent color                        |
| `public/`                  | Images, resume, favicon                     |

See [`TODO.md`](./TODO.md) for the personalization checklist.

## Deploying

Pushing to the `main` branch automatically builds and deploys via GitHub
Actions (`.github/workflows/deploy.yml`). No manual build needed.
