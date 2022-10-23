interface ImportMetaEnv {
	readonly SANITY_PROJECT_ID: string;
	readonly SANITY_DATASET: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

type Article = {
	slug: string;
	publishDate: string;
	title: string;
	body: any;
};

type Sponsor = {
	title: string;
	level: string;
	logo: string;
};
declare module "$locales" {
	export function registerAll(): void;
}