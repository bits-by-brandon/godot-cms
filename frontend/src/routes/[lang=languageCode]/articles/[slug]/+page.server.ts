import DirectusProvider from '$providers/directus-provider';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const directus = new DirectusProvider();
	const post = await directus.getPost(params.slug);

	return {
		post
	};
};
