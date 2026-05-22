import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const optionalUrl = z
  .union([z.url(), z.literal('')])
  .optional()
  .transform((value) => (value === '' ? undefined : value));

const sermons = defineCollection({
  loader: glob({ base: './src/content/sermons', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    speaker: z.string(),
    date: z.coerce.date(),
    scripture: z.string(),
    series: z.string(),
    description: z.string(),
    audioUrl: optionalUrl,
    videoUrl: optionalUrl,
    image: z.string().optional(),
    featured: z.boolean().default(false)
  })
});

const events = defineCollection({
  loader: glob({ base: './src/content/events', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    date: z.coerce.date(),
    startTime: z.string(),
    endTime: z.string().optional(),
    location: z.string(),
    description: z.string(),
    image: z.string().optional(),
    featured: z.boolean().default(false)
  })
});

const news = defineCollection({
  loader: glob({ base: './src/content/news', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    date: z.coerce.date(),
    author: z.string(),
    excerpt: z.string(),
    image: z.string().optional(),
    featured: z.boolean().default(false)
  })
});

const pages = defineCollection({
  loader: glob({ base: './src/content/pages', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    description: z.string(),
    image: z.string().optional()
  })
});

export const collections = {
  sermons,
  events,
  news,
  pages
};
