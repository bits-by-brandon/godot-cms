import DirectusProvider from '../../providers/directus-provider';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const cms = new DirectusProvider();
	const posts = await cms.getPosts();

	return { posts };
};
