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

type TranslatedField<T> = { languages_code: string } & T;

type TranslatedItem<T extends object> = {
	translations: TranslatedField<T>[];
};

type ResponseContributor = {
	id: number;
};

type ResponseArticle = {
	id: number;
	author: ResponseContributor;
	publish_date: string;
	slug: string;
	translations: TranslatedField<{ title: string; body: string }>[];
};

type Schema = {
	articles: ResponseArticle;
};

export default class DirectusProvider {
	client: Directus<Schema>;
	host: string;

	constructor() {
		this.host = EnvProvider.get('FRONTEND_CMS_HOST');
		this.client = new Directus(this.host);
	}

	async getPost(slug: string, options: { language: string } = { language: DEFAULT_LANGUAGE }): Promise<Article> {
		const responseArticles = await this.client.items('articles').readByQuery({
			fields: '*.*',
			filter: { slug }
		});

		if (!responseArticles.data || responseArticles.data.length === 0) {
			throw new Error(`Could not find blog post with slug ${slug}`);
		}

		return this.mapToArticle(responseArticles.data[0], options.language);
	}

	async getPosts(
		options: { limit: number; page: number; language: string } = {
			limit: -1,
			page: 1,
			language: DEFAULT_LANGUAGE
		}
	): Promise<Article[]> {
		const responseArticles = await this.client.items('articles').readByQuery({
			fields: '*.*',
			limit: options.limit
		});

		if (!responseArticles.data) {
			return [];
		}

		return responseArticles.data.map((article) => this.mapToArticle(article, options.language));
	}

	mapToArticle(article: ResponseArticle, language: string): Article {
		const translations = this.getTranslatedFieldLanguage(article, language);
		const sanitizedBody = sanitizeHtml(translations.body, {
			allowedTags: [],
			allowedAttributes: {}
		});

		return {
			slug: article.slug,
			publishDate: article.publish_date,
			title: translations.title,
			// image: article.image && `${this.host}/assets/${article.image.id}`,
			body: translations.body,
			snippet: sanitizedBody.slice(0, 200) + '...'
		};
	}

	getTranslatedFieldLanguage<T extends object>(item: TranslatedItem<T>, language: string): TranslatedField<T> {
		const foundTranslation = item.translations.find((fields) => fields.languages_code === language);
		if (!foundTranslation) throw new Error(`No translation for language ${language} found.`);
		return foundTranslation;
	}
}
