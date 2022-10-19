interface ImportMetaEnv {
	readonly SANITY_PROJECT_ID: string;
	readonly SANITY_DATASET: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

type Post = {
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
