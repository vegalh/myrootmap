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
  // Home: the hero, a portrait photograph or illustration (about 1200 × 1500 px or larger)
  homeHero: { src: '', ratio: '4 / 5', folder: 'hero' },
  // Home: the community section, landscape (about 1600 × 1200 px)
  homeCommunity: { src: '', ratio: '4 / 3', folder: 'community' },
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
  // Home page "How RootMap works"
  experience: '/images/features/app/today.jpg',
  remember: '/images/features/app/moments.jpg',
};

export const SCREENSHOT_SIZE = { width: 585, height: 1266 };
