# RootMap website

The official website for RootMap: educational philosophy, features, blog, resources and the future community.
It is a separate project from the RootMap app ([RootMapMVP](https://github.com/vegalh/RootMapMVP)) and only links to it.

Built with [Astro](https://astro.build) as a static site. English is the default language; Simplified Chinese lives under `/zh/`.

## Run locally

Requires Node.js 22.12 or later.

```bash
npm install
npm run dev          # http://localhost:4321 (shows draft articles)
npm run build        # production build into dist/, as deployed to https://myrootmap.com/
npm run preview      # serve the last build
npm run check        # type-check
```

`astro dev` runs in the background; stop it with `npx astro dev stop`.

## Where things live

| What | Where |
|---|---|
| All page text, both languages | `src/i18n/en.ts`, `src/i18n/zh.ts` |
| App links, survey links, Xiaohongshu and feedback links, draft visibility | `src/config/site.ts` |
| "Inspired by" entries on the homepage | `src/config/inspirations.ts` (images go in `public/images/inspired/`) |
| Photograph and illustration slots | `src/config/images.ts` (files go in `public/images/<folder>/`) |
| App screenshots | `public/images/features/app/` (from RootMapMVP `docs/screenshots`) |
| Blog articles | `src/content/blog/en/`, `src/content/blog/zh/` (see `src/content/README.md`) |
| Resources | `src/content/resources/` (see `src/content/README.md`) |
| Sketch and review screenshots (not part of the website) | `design/reference/`, `design/review/` |
| Design tokens and shared styles | `src/styles/global.css` |
| Shared components | `src/components/` |
| Page layouts (one per page, language-neutral) | `src/views/` |
| Routes (thin files that pick a language) | `src/pages/`, `src/pages/zh/` |

## Adding inspiration logos

Put your logo in `public/images/inspired/`, then add an entry to `INSPIRATIONS` in `src/config/inspirations.ts`.

```ts
{
  kind: 'logo',
  name: 'Organization name',
  image: '/images/inspired/organization.svg',
  href: 'https://example.com',
}
```

Logos appear in the homepage’s Inspired by section with their full proportions. Development previews show empty logo slots until you add entries.

## Adding images

1. Put the file in the folder named in `src/config/images.ts`, e.g. `public/images/hero/home.jpg`.
2. Set that slot's `src`, e.g. `homeHero: { src: '/images/hero/home.jpg', ... }`.
3. Write or adjust its alt text in `src/i18n/en.ts` and `src/i18n/zh.ts`.

Export photos at roughly 2× their displayed size (1600–2400 px on the long edge) as JPEG or WebP, under ~400 KB.

## Community surveys

Set `SURVEY_URLS.china` and `SURVEY_URLS.international` in `src/config/site.ts`. While a URL is empty, the Community
page shows "Coming soon / 即将开放" in place of that button.

## Deploying to GitHub Pages

Every push to `main` builds the site with `npm run build` and publishes it to `https://myrootmap.com/`
(`.github/workflows/deploy.yml`). Settings › Pages › Source must be set to "GitHub Actions", with `myrootmap.com` as
the custom domain (`public/CNAME` records it). A deploy can also be started by hand from the Actions tab.

The site is served from the root of the domain, so `site` and `base` in `astro.config.mjs` are `https://myrootmap.com`
and `/`. Building with any other base path makes every stylesheet, script and image address wrong on the live site.
