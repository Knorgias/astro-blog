import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function get() {
  const posts = await getCollection('posts');
  return rss({
    title: 'Astro Learner | Blog',
    description: 'Knorgias journey learning Astro 🧑‍🚀✨',
    site: 'https://knorgias-astro-blog.netlify.app/blog/',
    items: posts.map((post) => ({
      title: post.data.title,
      date: post.data.date,
      description: post.data.description,
      link: `/posts/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
