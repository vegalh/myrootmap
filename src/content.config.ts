// Content collections. Articles and resources are Markdown files; adding one needs no change to any page.
// See src/content/README.md for the fields and a template.

import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const BLOG_CATEGORIES = ['reflections', 'development', 'research', 'classroom', 'parenting', 'design'] as const;
const RESOURCE_CATEGORIES = ['development', 'everyday', 'observation', 'activities', 'reading', 'educators'] as const;
const RESOURCE_TYPES = ['guide', 'pdf', 'reading', 'research-summary', 'activity-collection', 'printable'] as const;

// Files and folders starting with "_" (such as _template.md) are ignored.
const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/[^_]*.{md,mdx}' }),
  schema: z
    .object({
      title: z.string(),
      description: z.string(),
      lang: z.enum(['en', 'zh']),
      category: z.enum(BLOG_CATEGORIES),
      // Required once an article is published; drafts may leave it out.
      date: z.coerce.date().optional(),
      // A path under public/, such as /images/blog/my-article.jpg. Leave out to show a quiet placeholder.
      cover: z.string().optional(),
      coverAlt: z.string().default(''),
      // Articles in different languages that share a translationKey link to each other.
      translationKey: z.string().optional(),
      draft: z.boolean().default(false),
    })
    .refine((post) => post.draft || post.date, { message: 'A published article (draft: false) needs a date.' }),
});

const resources = defineCollection({
  loader: glob({ base: './src/content/resources', pattern: '**/[^_]*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lang: z.enum(['en', 'zh']),
    category: z.enum(RESOURCE_CATEGORIES),
    type: z.enum(RESOURCE_TYPES),
    // Either a file under public/ (such as /resources/observation-guide.pdf) or an external link.
    href: z.string(),
    // Author, publisher or source, shown under the title. Never invent one.
    source: z.string().optional(),
    date: z.coerce.date().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, resources };
