import { getCollection, type CollectionEntry } from 'astro:content';
import { SHOW_DRAFTS } from '../config/site';
import { localePath, type Lang } from '../i18n';

export type Post = CollectionEntry<'blog'>;
export type Resource = CollectionEntry<'resources'>;

// "en/first-steps" → "first-steps"
export const postSlug = (post: Post) => post.id.replace(/^(en|zh)\//, '');
export const postUrl = (post: Post) => localePath(post.data.lang, `/blog/${postSlug(post)}`);

// Minutes to read an article: about 400 Chinese characters or 220 English words a minute, never less than one.
// The reference list (<ol class="refs">), other markup and link addresses are not counted.
export function readingMinutes(post: Post): number {
  const text = (post.body ?? '')
    .replace(/<ol class="refs">[\s\S]*?<\/ol>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\]\([^)]*\)/g, ']');
  const cjk = text.match(/[\u4e00-\u9fff]/g)?.length ?? 0;
  const words = text.replace(/[\u4e00-\u9fff]/g, ' ').match(/[A-Za-z0-9]+/g)?.length ?? 0;
  return Math.max(1, Math.round(cjk / 400 + words / 220));
}

const visible = (entry: { data: { draft: boolean } }) => SHOW_DRAFTS || !entry.data.draft;

// Articles in one language, newest first; drafts (undated) last.
export async function getPosts(lang: Lang): Promise<Post[]> {
  const posts = await getCollection('blog', (post) => post.data.lang === lang && visible(post));
  return posts.sort((a, b) => (b.data.date?.getTime() ?? 0) - (a.data.date?.getTime() ?? 0));
}

// Published articles only (never drafts, even in development), for the homepage.
export async function getPublishedPosts(lang: Lang, limit?: number): Promise<Post[]> {
  const posts = (await getPosts(lang)).filter((post) => !post.data.draft);
  return limit ? posts.slice(0, limit) : posts;
}

export async function getTranslation(post: Post): Promise<Post | undefined> {
  const key = post.data.translationKey;
  if (!key) return undefined;
  const all = await getCollection('blog', (other) => other.data.translationKey === key && other.data.lang !== post.data.lang && visible(other));
  return all[0];
}

export async function getResources(): Promise<Resource[]> {
  const resources = await getCollection('resources', visible);
  return resources.sort((a, b) => a.data.title.localeCompare(b.data.title));
}
