import { getCollection, type CollectionEntry } from 'astro:content';
import { getEntrySlug } from './content';

export const getEditablePage = async (
  slug: string
): Promise<CollectionEntry<'pages'>> => {
  const pages = await getCollection('pages');
  const page = pages.find((entry) => getEntrySlug(entry) === slug);

  if (!page) {
    throw new Error(`Missing editable page content for slug: ${slug}`);
  }

  return page;
};
