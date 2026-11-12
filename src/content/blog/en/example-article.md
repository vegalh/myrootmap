---
title: "Example article: how a RootMap post is put together"
description: "A draft that shows the structure of a blog article. Replace or delete it before publishing the first real post."
lang: en
category: design
# date: 2026-11-20      # add a date when the article is ready to publish
# cover: /images/blog/example-article.jpg
coverAlt: ""
translationKey: example-article
draft: true
---

This is an **example draft**, not a published article. It exists only to show how articles are written and how they look on the page. It is visible while developing the site (`npm run dev`) and is left out of the published website because `draft: true` is set above.

## Writing an article

Each article is a Markdown file in `src/content/blog/en/` (English) or `src/content/blog/zh/` (Chinese). The block at the top, between the `---` lines, holds the title, a short description, the category and the date. Everything below it is the article itself.

Paragraphs are separated by a blank line. Headings start with `##`. Text can be *emphasised* or **made strong**, and [links](https://vegalh.github.io/rootmapmvp/) work as usual.

## Lists and quotations

A list can hold a few related ideas:

- an observation from home or the classroom
- a question it raised
- what you might try next time

> A quotation looks like this. Use it for words that are genuinely someone else’s, with the source named.

## Images

Put the image file in `public/images/blog/` and reference it from the article:

```md
![A child pouring water into a small jug](/images/blog/pouring.jpg)
```

The cover image is set with `cover:` at the top. Without one, the article card shows a quiet placeholder.

## Before publishing

1. Set `draft: false`.
2. Add a `date:`.
3. Add a cover image and its `coverAlt` text, if you have one.
4. If there is a Chinese version, give it the same `translationKey` so the two link to each other.
