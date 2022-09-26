import DirectusProvider from '../providers/directus-provider.ts';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const cms = new DirectusProvider();
  const posts = await cms.getPosts();

  return {
    posts,
    title: 'Hello world!',
    content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
  };
}
