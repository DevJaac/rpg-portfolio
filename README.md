# Player One — Stage 1

A frontend-only React + TypeScript + Vite + Tailwind CSS portfolio foundation. No personal accomplishments are assumed. Bracketed values and placeholder labels are intentional.

## Run

Use Node.js 22.18+ or Node.js 24 and npm (or pnpm).

```sh
npm install
npm run dev
npm run build
npm run preview
```

This workspace uses a pnpm lockfile; `pnpm install --frozen-lockfile` reproduces the installed versions. The pixel font is bundled locally, with no runtime font service required. If this restricted Windows environment blocks the Vite development optimizer, run the build and use the production preview instead.

## Edit

- `src/data.ts`: personal information, navigation labels, and all personal placeholder entries.
- `src/styles.css`: palette, layout, responsive rules, borders, typography, and interaction states.
- `src/components.tsx`: section headings, framed panels, pixel buttons/links, skill badges, project cards, timeline entries, and original decorative SVG.
- `src/main.tsx`: page composition and accessible navigation behavior.
- `index.html`: browser title and metadata.

## Scope

Eight anchor destinations, sticky navigation, mobile disclosure menu with Escape support, active section pointer/underline, focus indicators, skip link, reduced motion support, and responsive placeholder sections. Contact is deliberately disabled pending real contact details. No backend, form delivery, project detail pages, resume download, or invented statistics.

The next stage should replace placeholders and flesh out one agreed section at a time.
