// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// 2. Define your collection(s)
const demoCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
  }),
});

const newsletterCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
  }),
});

const postsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),
      cover: image(),
      coverAlt: z.string().optional(),
      image: z.object({
        url: z.string(),
        alt: z.string(),
      }),

      tags: z.array(z.string()),
    }),
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  demos: demoCollection,
  newsletters: newsletterCollection,
  posts: postsCollection,
};
