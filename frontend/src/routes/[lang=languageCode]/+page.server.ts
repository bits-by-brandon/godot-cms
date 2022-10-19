import DirectusProvider from '../../providers/directus-provider';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const cms = new DirectusProvider();
	const posts = await cms.getPosts({ language: params.lang, limit: 3, page: 1 });

	return { posts };
};
