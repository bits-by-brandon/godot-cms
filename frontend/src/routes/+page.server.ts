import DirectusProvider from '../providers/directus-provider';

export async function load() {
  const cms = new DirectusProvider();
  const posts = await cms.getPosts();

  return {
    posts,
  };
}
