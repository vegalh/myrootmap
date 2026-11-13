// Site-wide settings. Everything that points outside this website lives here, so links can be changed in one place.

export const SITE_NAME = 'RootMap';

// The RootMap application (a separate project: github.com/vegalh/RootMapMVP). The app keeps its page in the URL hash.
// Verified against src/lib/routes.ts in that repository and the live build (November 2026):
//   /            opens the welcome screen for a new visitor (or Today for a returning one)
//   #/sign-in    opens the sign-in form; the live build has accounts (beta) switched on
// If accounts are ever switched off, #/sign-in falls back to Today, so the link never breaks.
export const APP_URL = 'https://vegalh.github.io/rootmapmvp/';
export const APP_LOGIN_URL = `${APP_URL}#/sign-in`;

// The invite request form on the homepage (#invite): a hosted form shown in a frame, one per language.
//   en: Google Forms. In the form, choose Send › "<>" (embed) and paste the address from its src="…" here; it ends
//       in "/viewform?embedded=true".
//   zh: Jinshuju (金数据), which loads in mainland China. Paste the form's embed address (发布 › 嵌入网页).
// Both forms ask the same questions in the same order (the full wording is in docs/INVITE-FORM.md): how to reach you
// (email on Google Forms, WeChat ID on Jinshuju; required); parent / caregiver / teacher; the child's age or the age
// group taught; time for play and activities on a workday; the same at the weekend; what RootMap would be useful
// for; what to improve or add. Set each form to show a thank-you message rather than redirect.
// If the questions change, update the Privacy page text (pages.privacy in src/i18n) to match.
// While a link is empty the published homepage has no form, so fill both in before publishing.
export const INVITE_FORM_URLS: Record<'en' | 'zh', string> = {
  en: '',
  zh: '',
};

// Community interest surveys. Paste the real links here when they exist; a survey with an empty link is not shown.
// Until then their questions are part of the invite form above.
//   china:         a survey service that works in mainland China (for example Tencent Survey / 腾讯问卷)
//   international: a survey service for everywhere else (for example Tally)
export const SURVEY_URLS = {
  china: '',
  international: '',
};

// Xiaohongshu (小红书) account page, linked from the Community page ("Explore more with us"). Paste the full profile link
// here; the Rednotes card on the Community page and the link on the Contact page appear once it is set.
export const XIAOHONGSHU_URL = '';

// WeChat ID, shown on the Contact page once it is set.
export const WECHAT_ID = '';

// Contact email, shown on the Contact page as a mail link once it is set.
export const CONTACT_EMAIL = '';

// Where people share feedback about the RootMap app (a form or survey link, or 'mailto:you@example.com').
// The feedback invitation on the Community page appears once it is set.
export const FEEDBACK_URL = '';

// Blog drafts (`draft: true`) are shown while developing (`npm run dev`) and left out of production builds.
export const SHOW_DRAFTS = import.meta.env.DEV;

// Design placeholders that only show the shape of a layout (such as the sample slots in "Inspired by" while
// src/config/inspirations.ts is empty) appear while developing; the published site shows a short empty state instead.
export const SHOW_DESIGN_PLACEHOLDERS = import.meta.env.DEV;
