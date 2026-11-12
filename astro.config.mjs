// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages serves this repository at https://vegalh.github.io/myrootmap/, so production builds for Pages
// (`npm run build:pages`, or any build with GITHUB_PAGES set) use the /myrootmap base path. Local development
// and a future custom domain use the root. When a custom domain is added, set `site` to it and drop the base.
const onGitHubPages = Boolean(process.env.GITHUB_PAGES);
const base = onGitHubPages ? '/myrootmap' : '/';

// Markdown articles write site paths as "/images/blog/a.jpg"; this puts the base path in front of them.
function rehypeBasePath() {
  const prefix = base.replace(/\/$/, '');
  /** @param {any} node */
  const fix = (node) => {
    if (node.type === 'element') {
      for (const attr of ['src', 'href']) {
        const value = node.properties?.[attr];
        if (prefix && typeof value === 'string' && value.startsWith('/') && !value.startsWith('//') && !value.startsWith(`${prefix}/`)) {
          node.properties[attr] = prefix + value;
        }
      }
    }
    node.children?.forEach(fix);
  };
  return (/** @type {any} */ tree) => fix(tree);
}

export default defineConfig({
  site: 'https://vegalh.github.io',
  base,
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  markdown: {
    shikiConfig: { theme: 'github-light' },
    rehypePlugins: [rehypeBasePath],
  },
  i18n: {
    locales: ['en', 'zh'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
});
