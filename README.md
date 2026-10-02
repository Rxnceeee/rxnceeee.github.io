# Rance Rios — Portfolio

React + TypeScript portfolio using Tailwind CSS v4 and shadcn/ui components. Resume content lives in `src/App.tsx` and `src/data.ts`. Airflow and Linux are explicitly listed as basic experience.

## Development

Requires Node.js 22.12+.

```sh
npm ci
npm run dev
```

`npm run build` type-checks and produces `dist/`. Use `npm run preview` to preview the production build.

## GitHub Pages

In repository **Settings → Pages → Build and deployment**, choose **GitHub Actions**. The included workflow builds and deploys pushes to `main` or `master`, or can be run manually. The Vite base path targets the root user site, `rxnceeee.github.io`.

Contact uses direct email and telephone links; no backend or message delivery service is needed. Internal company projects have no public source-code links.

UI setup follows the [shadcn/ui Vite guide](https://ui.shadcn.com/docs/installation/vite) and [Tailwind Vite guide](https://tailwindcss.com/docs/installation/using-vite).
