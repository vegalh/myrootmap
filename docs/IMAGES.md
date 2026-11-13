# Pictures on the website

Every picture file lives in `public/images/`, in a folder named for the page that uses it. The file name says where on
the page it goes, then what it shows. Where each one is placed, and how it is cropped, is set in
`src/config/images.ts`; the description read aloud by screen readers is in `src/i18n/en.ts` and `zh.ts`.

Full-size originals of some photographs (before they were made smaller for the web) are kept in `design/photo-originals/`,
named the same way. They are not published.

To replace a picture, save the new file over the old one with the same name. To use a different name, change the path
in `src/config/images.ts` as well.

## home/

| File | Shows | Appears |
|---|---|---|
| `hero-cooking-together.jpg` | An adult and a child preparing cucumber together | Homepage, the large arched photograph at the top |

## activities/

Photographs of real activities, copied from the app.

| File | Shows | Appears |
|---|---|---|
| `orange-peeling.jpg` | A child peeling a mandarin orange over a tray, with a basket for the peel | Homepage, "Today's idea, for example", first card |
| `washing-leafy-greens.jpg` | A child rinsing leafy greens under a running tap | Homepage, second example card; Our Philosophy, beside "Learning through real experiences" |

## app/

Screenshots of the app with the demo family (585 × 1266).

| File | Shows | Appears |
|---|---|---|
| `screen-today.jpg` | The Today screen | Homepage hero (over the photograph); Homepage "How it works" step 2; Features |
| `screen-discover.jpg` | The Discover screen, with the activity library | Homepage "How it works" step 1; Features |
| `screen-moments.jpg` | My Moments, a timeline of saved moments | Homepage "How it works" step 3; Features |
| `screen-child-profile.jpg` | A child's profile and journal | Homepage "How it works" step 4; Features |
| `screen-activity-detail.jpg` | The Getting Water activity: skills, materials, steps | Features |
| `screen-my-week.jpg` | The My Week plan | Features |

Still missing: a screenshot of "Our Routine" for the Features page (it shows a placeholder).

## philosophy/

| File | Shows | Appears |
|---|---|---|
| `page-top-autumn-play.jpg` | A child playing among autumn leaves | Our Philosophy, wide picture under the title |
| `why-pouring-water.jpg` | A child pouring water from a jug into a glass | Our Philosophy, "Childhood happens in the real world", main photograph |
| `why-planting-detail.jpg` | A child's hands planting a seedling in a terracotta pot | Same section, the small square tucked over the corner |
| `independence-watering-plant.jpg` | A child watering a plant | Our Philosophy, beside "Supporting children's independence" |

## about/

| File | Shows | Appears |
|---|---|---|
| `founder-portrait.jpg` | The founder | Homepage founder strip; About, the founder's note |

## community/

| File | Shows | Appears |
|---|---|---|
| `page-top-family-stories.jpg` | A child sharing family photographs with an adult | Community, beside the title |
| `card-blog-reading-together.jpg` | A child reading a photo book at home | Community, "Explore more with us", Blog card |
| `card-resources-nature-activity.jpg` | A child collecting natural objects in an egg carton | Same section, Resources card |
| `card-rednotes-flower-arranging.jpg` | A child arranging flowers in a small vase | Same section, Rednotes card. Not shown until the Rednotes link is set in `src/config/site.ts` |

## Empty for now

- `blog/`: cover pictures and pictures inside articles.
- `resources/`: pictures for resources.
- `inspired/`: portraits, covers and logos for "Inspired by" (`src/config/inspirations.ts`).
