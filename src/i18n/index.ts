// Languages and paths. English lives at the site root ("/features"), every other language under its own prefix
// ("/zh/features"). To add a language: add its dictionary, list it in LANGS, add it to `locales` in astro.config.mjs,
// and add a src/pages/<lang>/ folder of thin page files like src/pages/zh/.

import { en, type Dict } from './en';
import { zh } from './zh';

export const LANGS = ['en', 'zh'] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = 'en';

const dictionaries: Record<Lang, Dict> = { en, zh };

export function t(lang: Lang): Dict {
  return dictionaries[lang];
}

export function isLang(value: string | undefined): value is Lang {
  return LANGS.includes(value as Lang);
}

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

// A path inside this website, with the GitHub Pages base path in front: url('/images/a.jpg').
export function url(path: string): string {
  return `${BASE}${path.startsWith('/') ? path : `/${path}`}`;
}

// A page path in a language: localePath('zh', '/blog') → '/zh/blog' (base path included).
export function localePath(lang: Lang, path = '/'): string {
  const clean = path === '/' ? '' : path.replace(/\/$/, '');
  const prefixed = lang === DEFAULT_LANG ? clean || '/' : `/${lang}${clean}`;
  return url(prefixed);
}

// The language-neutral page path of a URL pathname: '/myrootmap/zh/blog/' → '/blog'.
export function pagePath(pathname: string): string {
  let path = pathname.startsWith(BASE) ? pathname.slice(BASE.length) : pathname;
  const first = path.split('/')[1];
  if (isLang(first) && first !== DEFAULT_LANG) path = path.slice(first.length + 1);
  path = path.replace(/\/$/, '');
  return path || '/';
}

export function formatDate(date: Date, lang: Lang): string {
  return new Intl.DateTimeFormat(lang === 'zh' ? 'zh-CN' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}
