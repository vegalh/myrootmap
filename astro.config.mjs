// @ts-check
import { defineConfig } from 'astro/config';

// The site is published with GitHub Pages on its own domain, https://myrootmap.com/ (public/CNAME), so it is served
// from the root: every build, local or deployed, uses the base path "/". If it ever moves to a sub-path (such as
// https://vegalh.github.io/myrootmap/), change `site` and `base` here; all links and assets follow.
const site = 'https://myrootmap.com';
const base = '/';

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
  site,
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
