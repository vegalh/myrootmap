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

// Blog drafts (`draft: true`) are shown while developing (`npm run dev`) and left out of production builds.
export const SHOW_DRAFTS = import.meta.env.DEV;
