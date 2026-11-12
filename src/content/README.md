# Content

Articles and resources are Markdown files. Adding, editing or removing one needs no change to any page component.
The fields are checked when the site builds (`src/content.config.ts`), so a missing or misspelled field shows an error.

## Blog articles: `blog/en/` and `blog/zh/`

```md
---
title: "Article title"
description: "One or two sentences shown on article cards and in search results."
lang: en                # en or zh
category: reflections   # reflections · development · research · classroom · parenting · design
date: 2026-12-01        # required once published
cover: /images/blog/article-name.jpg   # optional, a file in public/images/blog/
coverAlt: "What the cover image shows"
translationKey: article-name           # optional: the same key on the English and Chinese versions links them
draft: false            # true keeps it out of the published site (it still shows in `npm run dev`)
---

The article, in Markdown.
```

The file name becomes the address: `blog/en/first-steps.md` → `/blog/first-steps`, `blog/zh/first-steps.md` → `/zh/blog/first-steps`.

Chinese and English versions are written separately. Please don't publish a machine translation of research content as if it were reviewed.

## Resources: `resources/`

```md
---
title: "Resource title"
description: "What it is and who it is for."
lang: en                # en or zh: the language of the resource itself
category: observation   # development · everyday · observation · activities · reading · educators
type: guide             # guide · pdf · reading · research-summary · activity-collection · printable
href: /resources/observation-guide.pdf   # a file in public/resources/, or a full https:// link
source: "Author or publisher"            # optional; never invent one
date: 2026-12-01        # optional
draft: false
---

Optional longer notes (not shown yet).
```

Resources show on the Resources page in both languages, grouped by category, with their own language marked.
Files and folders starting with `_` are ignored.
