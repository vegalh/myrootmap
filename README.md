# RootMap

Grow with your child through meaningful everyday experiences.

RootMap helps parents and caregivers turn small moments into opportunities for curiosity, independence and connection. Cook together, sort the laundry, plant a seed or explore the neighborhood. Simple activities give children room to discover, try and learn, while adults learn alongside them.

[Visit the website](https://myrootmap.com/) · [Open RootMap](https://vegalh.github.io/rootmapmvp/) · [Log in](https://vegalh.github.io/rootmapmvp/#/sign-in)

## Find your next idea

- **Discover activities** that fit your child’s age, your surroundings and the materials you have.
- **Try something together** with practical steps for everyday family life.
- **Remember small moments** with a photo and a few words.
- **Reflect on your child’s growth** through their experiences and interests.

## Explore the website

Read about the thinking behind RootMap, see how the app works, and explore reflections on childhood and learning. The blog and resources library will grow over time. You can also learn about plans for a community and share what you would like it to offer.

The website is available in [English](https://myrootmap.com/) and [简体中文](https://myrootmap.com/zh/).

## For website editors

Use the guide below to update the website or preview changes on your computer.

<details>
<summary>Open the editing guide</summary>

### Preview the website

Install Node.js 22.12 or later, then run these commands in the project folder.

```bash
npm install
npm run dev
```

Open the local address printed in the terminal, usually `http://localhost:4321`.

To check your changes and create the published version, run the following commands.

```bash
npm run check
npm run build
```

Use `npm run preview` to view the latest build. Stop background servers with `npx astro dev stop` or `npx astro preview stop`.

### Find the files you need

| To update | Open |
| --- | --- |
| English text | `src/i18n/en.ts` |
| Chinese text | `src/i18n/zh.ts` |
| Login, app, Rednotes, contact and survey links | `src/config/site.ts` |
| Homepage layout | `src/views/Home.astro` |
| Photos and their placement | `src/config/images.ts` and `public/images/` |
| Inspiration names and logos | `src/config/inspirations.ts` |
| Blog posts and resources | `src/content/` and its [content guide](src/content/README.md) |
| Navigation and shared page elements | `src/components/` |
| Colors, fonts and shared styles | `src/styles/global.css` |
| Page addresses in each language | `src/pages/` |
| Design references and review images | `design/` |

### Add a photo

1. Save the image in the matching folder inside `public/images/`.
2. Open `src/config/images.ts` and enter its website path in the matching `src` field. For a founder portrait, use a path such as `/images/founder/portrait.jpg`.
3. Add a short image description in both language files so people using screen readers can understand it.

JPEG and WebP work well for photos. Aim for 1600–2400 pixels on the long edge and a file size under about 400 KB.

### Add an inspiration logo

Save the logo in `public/images/inspired/`, then add an entry inside the `INSPIRATIONS` list in `src/config/inspirations.ts`.

```ts
{
  kind: 'logo',
  name: 'Organization name',
  image: '/images/inspired/organization.svg',
  href: 'https://example.com',
}
```

The logo will appear in the homepage’s Inspired by section. Local development previews show sample spaces until real entries are added.

### Add contact details or surveys

Open `src/config/site.ts` to add your email, WeChat ID, Rednotes profile and community survey links. Empty fields display a coming-soon message.

### Publish changes

The website uses Astro and GitHub Pages. Pushing changes to `main` starts the build and publication process. You can follow its progress in the repository’s Actions tab.

GitHub Pages should use GitHub Actions as its source and `myrootmap.com` as its custom domain. The domain is recorded in `public/CNAME`. In `astro.config.mjs`, `site` is `https://myrootmap.com` and `base` is `/`.

The [RootMap app](https://github.com/vegalh/RootMapMVP) has its own repository.

</details>
