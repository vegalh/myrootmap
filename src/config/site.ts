// Site-wide settings. Everything that points outside this website lives here, so links can be changed in one place.

export const SITE_NAME = 'RootMap';

// The RootMap application (a separate project: github.com/vegalh/RootMapMVP). The app keeps its page in the URL hash.
// Verified against src/lib/routes.ts in that repository and the live build (November 2026):
//   /            opens the welcome screen for a new visitor (or Today for a returning one)
//   #/sign-in    opens the sign-in form; the live build has accounts (beta) switched on
// If accounts are ever switched off, #/sign-in falls back to Today, so the link never breaks.
export const APP_URL = 'https://vegalh.github.io/rootmapmvp/';
export const APP_LOGIN_URL = `${APP_URL}#/sign-in`;

// Community interest surveys. Paste the real links here when they exist; an empty string shows a
// "Coming soon / 即将开放" state on the Community page instead of a button.
//   china:         a survey service that works in mainland China (for example Tencent Survey / 腾讯问卷)
//   international: a survey service for everywhere else (for example Tally)
export const SURVEY_URLS = {
  china: '',
  international: '',
};

// Xiaohongshu (小红书) account page, linked from the homepage ("Explore more with us"). Paste the full profile link
// here; while it is empty the homepage shows "Link coming soon" instead of a link.
export const XIAOHONGSHU_URL = '';

// WeChat ID, shown beside the Connect button in the founder's note. While it is empty the page shows
// "WeChat · coming soon".
export const WECHAT_ID = '';

// Contact email, shown beside the Connect button as a mail link. While it is empty the page shows
// "Email · coming soon".
export const CONTACT_EMAIL = '';

// Where people share feedback about the RootMap app (a form or survey link, or 'mailto:you@example.com').
// While it is empty the homepage shows "Feedback form coming soon" instead of a button.
export const FEEDBACK_URL = '';

// Blog drafts (`draft: true`) are shown while developing (`npm run dev`) and left out of production builds.
export const SHOW_DRAFTS = import.meta.env.DEV;

// Design placeholders that only show the shape of a layout (such as the sample slots in "Inspired by" while
// src/config/inspirations.ts is empty) appear while developing; the published site shows a short empty state instead.
export const SHOW_DESIGN_PLACEHOLDERS = import.meta.env.DEV;
