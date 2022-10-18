// import { Directus } from "@directus/sdk";
// import EnvProvider from "$lib/util/envProvider";
//
// type ResponseTranslatedFields<T> = Array<{ languages_id: string } & T>;
//
// type ResponsePost = {
//   id: number;
// };
//
// type Schema = {
//   Posts: ResponsePost;
// };
//
// export default class DirectusProvider {
//   client: Directus<Schema>;
//
//   constructor() {
//     const CMS_HOST = EnvProvider.get('FRONTEND_CMS_HOST');
//     this.client = new Directus(CMS_HOST);
//   }
//
//   async getPosts() {
//     return this.client.items('Posts').readByQuery();
//   }
//
//   getTranslatedFieldLanguage<T extends ResponseTranslatedFields<any>>(
//     languages: T,
//     language: string
//   ): T[number] {
//     return languages.find((fields) => fields.languages_id === language);
//   }
// }
import sanitizeHtml from 'sanitize-html';
import { Directus } from '@directus/sdk';

import { DEFAULT_LANGUAGE } from '$lib/languageConfig';
import EnvProvider from '../lib/util/envProvider';

type ResponseImage = {
	id: string;
	storage: string;
	filename_disk: string;
	filename_download: string;
	title: string;
	type: string;
	folder: string | null;
	uploaded_by: string | null;
	uploaded_on: string | null;
	modified_by: string | null;
	modified_on: string | null;
	charset: string | null;
	filesize: number;
	width: number;
	height: number;
	description: string | null;
	metadata: Record<string, string | boolean | number> | null;
};

type ResponseTranslatedFields<T> = Array<{ languages_id: string } & T>;

type ResponseContributor = {
	full_name: string;
	id: number;
	sort: number | null;
};

type ResponsePost = {
	id: number;
	author: ResponseContributor;
	image?: ResponseImage;
	publish_date: string;
	slug: string;
	translations: ResponseTranslatedFields<{ title: string; body?: string }>;
};

type Schema = {
	Posts: ResponsePost;
};

export default class DirectusProvider {
	client: Directus<Schema>;
	host: string;

	constructor() {
		this.host = EnvProvider.get('FRONTEND_CMS_HOST');
		this.client = new Directus(this.host);
	}

	async getPosts(
		options: { limit: number; page: number; language: string } = {
			limit: 25,
			page: 1,
			language: DEFAULT_LANGUAGE
		}
	): Promise<Post[]> {
		const posts = this.client.items('Posts');
		const responsePosts = await posts.readByQuery({
			fields: '*.*',
			limit: options.limit,
			page: options.page
		});

		return responsePosts.data as Post[];

		// return responsePosts.data.map((post) => {
		// 	// TODO: Return fields of current page's locale
		// 	const translations = this.getTranslatedFieldLanguage(post.translations, options.language);
		// 	const sanitized = sanitizeHtml(translations.body, {
		// 		allowedTags: [],
		// 		allowedAttributes: {}
		// 	});
		//
		// 	return {
		// 		slug: post.slug,
		// 		publishedAt: post.publish_date,
		// 		title: translations.title,
		// 		image: post.image && `${this.host}/assets/${post.image.id}`,
		// 		body: translations.body,
		// 		snippet: sanitized.slice(0, 200) + '...'
		// 	};
		// });
	}

	getTranslatedFieldLanguage<T extends ResponseTranslatedFields<any>>(languages: T, language: string): T[number] {
		return languages.find((fields) => fields.languages_id === language);
	}
}
