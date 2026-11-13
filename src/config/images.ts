// Every photograph and illustration slot on the website, in one place.
// A full list of the picture files, what each shows and where it appears, is in IMAGES.md at the top of the project.
// Files are grouped by the page that uses them, and named for their place on that page.
//
// To add an image: put the file in the folder shown (under public/images/), then set `src` to its path,
// for example src: '/images/hero/home.jpg'. Until `src` is set, the slot shows a quiet labelled placeholder.
// Alt text lives in the language files (src/i18n), so it can be written in both languages.
//
// `ratio` is the shape the layout crops to (width / height). Images are cropped from the centre with
// object-fit: cover; `position` moves the focal point, e.g. '50% 30%' keeps faces near the top in view.

export type ImageSlot = {
  src: string;
  ratio: string;
  position?: string;
  folder: string;
};

export const IMAGES = {
  // Home, hero: the main photograph or illustration, portrait (about 1600 × 2000 px or larger). It is shown in an
  // arch, so the top corners are rounded away: keep faces and hands away from the top corners.
  homeHero: { src: '/images/home/hero-cooking-together.jpg', ratio: '4 / 5', position: '50% 65%', folder: 'home' },
  // Home, the example activity cards: the activity's own photograph from the app (landscape, about 1400 × 1050 px).
  exampleOrangePeeling: { src: '/images/activities/orange-peeling.jpg', ratio: '4 / 3', position: '50% 40%', folder: 'activities' },
  exampleWashingGreens: { src: '/images/activities/washing-leafy-greens.jpg', ratio: '4 / 3', folder: 'activities' },
  // Our Philosophy, "Why RootMap" (moved from the homepage): real-world learning. A larger photograph of a child absorbed in something everyday
  // (about 1800 × 1440 px) and a small square detail that overlaps its corner (hands, materials; about 800 × 800 px).
  homeChildhoodMain: { src: '/images/philosophy/why-pouring-water.jpg', ratio: '5 / 4', folder: 'philosophy' },
  homeChildhoodDetail: { src: '/images/philosophy/why-planting-detail.jpg', ratio: '1 / 1', folder: 'philosophy' },
  // Home (founder strip) and About (the founder's note): a portrait photograph or illustration, square, shown in a circle (about 1000 × 1000 px).
  founderPortrait: { src: '/images/about/founder-portrait.jpg', ratio: '1 / 1', position: '50% 30%', folder: 'about' },
  // Community, "Explore more with us" (moved from the homepage): one preview for each destination.
  //   Xiaohongshu: a personal photograph, portrait like a post (about 1200 × 1600 px)
  //   Blog: writing, notes or a desk (about 1600 × 1200 px)
  //   Resources: educational materials or an illustration (about 1600 × 1200 px)
  exploreXiaohongshu: { src: '/images/community/card-rednotes-flower-arranging.jpg', ratio: '3 / 4', folder: 'community' },
  exploreBlog: { src: '/images/community/card-blog-reading-together.jpg', ratio: '4 / 3', folder: 'community' },
  exploreResources: { src: '/images/community/card-resources-nature-activity.jpg', ratio: '4 / 3', folder: 'community' },
  // Our Philosophy: a wide image under the page title (about 2000 × 900 px)
  philosophyHero: { src: '/images/philosophy/page-top-autumn-play.jpg', ratio: '21 / 9', position: '50% 35%', folder: 'philosophy' },
  // Our Philosophy: one image beside the "Learning through real experiences" and "independence" sections (portrait).
  // The first is the same photograph as the Washing Leafy Greens activity card on the homepage.
  philosophyRealExperiences: { src: '/images/activities/washing-leafy-greens.jpg', ratio: '4 / 5', folder: 'activities' },
  philosophyIndependence: { src: '/images/philosophy/independence-watering-plant.jpg', ratio: '4 / 5', folder: 'philosophy' },
  // Community page: landscape (about 1600 × 1200 px)
  communityHero: { src: '/images/community/page-top-family-stories.jpg', ratio: '4 / 3', folder: 'community' },
} satisfies Record<string, ImageSlot>;

// Authentic screenshots of the RootMap app (copied from RootMapMVP docs/screenshots, iPhone size, demo family).
// A feature with an empty string shows a "Screenshot to come" placeholder.
export const SCREENSHOTS: Record<string, string> = {
  today: '/images/app/screen-today.jpg',
  discover: '/images/app/screen-discover.jpg',
  activity: '/images/app/screen-activity-detail.jpg',
  moments: '/images/app/screen-moments.jpg',
  week: '/images/app/screen-my-week.jpg',
  children: '/images/app/screen-child-profile.jpg',
  routine: '',
  // Home page, "How it works": Discover → Experience → Remember → Reflect
  experience: '/images/app/screen-today.jpg',
  remember: '/images/app/screen-moments.jpg',
  reflect: '/images/app/screen-child-profile.jpg',
};

export const SCREENSHOT_SIZE = { width: 585, height: 1266 };
