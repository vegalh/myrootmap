// Every photograph and illustration slot on the website, in one place.
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
  homeHero: { src: '', ratio: '4 / 5', folder: 'hero' },
  // Home, "Why RootMap": real-world learning. A larger photograph of a child absorbed in something everyday
  // (about 1800 × 1440 px) and a small square detail that overlaps its corner (hands, materials; about 800 × 800 px).
  homeChildhoodMain: { src: '', ratio: '5 / 4', folder: 'philosophy' },
  homeChildhoodDetail: { src: '', ratio: '1 / 1', folder: 'philosophy' },
  // Home, the founder's note: a portrait photograph or illustration, square, shown in a circle (about 1000 × 1000 px).
  founderPortrait: { src: '/images/founder/portrait.jpg', ratio: '1 / 1', position: '50% 30%', folder: 'founder' },
  // Home, "Explore more with us": one preview for each destination.
  //   Xiaohongshu: a personal photograph, portrait like a post (about 1200 × 1600 px)
  //   Blog: writing, notes or a desk (about 1600 × 1200 px)
  //   Resources: educational materials or an illustration (about 1600 × 1200 px)
  exploreXiaohongshu: { src: '', ratio: '3 / 4', folder: 'explore' },
  exploreBlog: { src: '', ratio: '4 / 3', folder: 'explore' },
  exploreResources: { src: '', ratio: '4 / 3', folder: 'explore' },
  // Our Philosophy: a wide image under the page title (about 2000 × 900 px)
  philosophyHero: { src: '', ratio: '21 / 9', folder: 'philosophy' },
  // Our Philosophy: one image beside the "Learning through real experiences" and "independence" sections (portrait)
  philosophyRealExperiences: { src: '', ratio: '4 / 5', folder: 'philosophy' },
  philosophyIndependence: { src: '', ratio: '4 / 5', folder: 'philosophy' },
  // Community page: landscape (about 1600 × 1200 px)
  communityHero: { src: '', ratio: '4 / 3', folder: 'community' },
} satisfies Record<string, ImageSlot>;

// Authentic screenshots of the RootMap app (copied from RootMapMVP docs/screenshots, iPhone size, demo family).
// A feature with an empty string shows a "Screenshot to come" placeholder.
export const SCREENSHOTS: Record<string, string> = {
  today: '/images/features/app/today.jpg',
  discover: '/images/features/app/discover.jpg',
  activity: '/images/features/app/activity-detail.jpg',
  moments: '/images/features/app/moments.jpg',
  week: '/images/features/app/my-week.jpg',
  children: '/images/features/app/child-profile.jpg',
  routine: '',
  // Home page, "Experience RootMap": Discover → Experience → Remember → Reflect
  experience: '/images/features/app/today.jpg',
  remember: '/images/features/app/moments.jpg',
  reflect: '/images/features/app/child-profile.jpg',
};

export const SCREENSHOT_SIZE = { width: 585, height: 1266 };
