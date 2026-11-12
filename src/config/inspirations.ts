// "Inspired by" on the homepage: the people, books, ideas and educational approaches that have shaped RootMap.
//
// To add one, add an entry to INSPIRATIONS; to remove one, delete it. The homepage needs no other change.
// While the list is empty, the published site shows a short "still being gathered" note.
//
// Only list real people and works, and only what you can stand behind:
//   - being listed here means "this influenced my thinking", never an endorsement of or relationship with RootMap
//   - `quote` is for the exact, checked words of the person or work; your own thoughts go in `note`
//
// Text can be one string used in both languages ('Maria Montessori') or one for each ({ en: '…', zh: '…' }).
//
// For an inspiration logo, use kind: 'logo', name, image: '/images/inspired/name.svg', and optional href.
// Logo images keep their full proportions inside a generous, uncropped frame.
// Example:
//   {
//     kind: 'book',
//     name: { en: 'Book title', zh: '书名' },
//     by: 'Author name',
//     note: { en: 'Why it stayed with me, in a sentence.', zh: '它为什么让我念念不忘。' },
//     image: '/images/inspired/book-title.jpg',
//     href: 'https://…',
//   },

import type { Lang } from '../i18n';

export type InspirationKind = 'educator' | 'researcher' | 'author' | 'creator' | 'book' | 'paper' | 'philosophy' | 'logo';
export type Localized = string | Record<Lang, string>;

export type Inspiration = {
  kind: InspirationKind;
  // The person, book, paper or approach.
  name: Localized;
  // For a book or paper: who wrote it.
  by?: Localized;
  // Your own short reflection, shown like a handwritten annotation.
  note?: Localized;
  // A verified quotation, shown in quotation marks.
  quote?: Localized;
  // A portrait (square, shown in a circle) or a cover (upright, about 2:3), in public/images/inspired/.
  // Use only images you have the right to publish. Without one, a small botanical drawing is shown.
  image?: string;
  imageAlt?: Localized;
  // Where to read more. Opens in a new tab.
  href?: string;
};

export const INSPIRATIONS: Inspiration[] = [];

export const localized = (value: Localized | undefined, lang: Lang): string => (typeof value === 'string' ? value : (value?.[lang] ?? ''));
