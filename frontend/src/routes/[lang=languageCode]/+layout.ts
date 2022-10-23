import type { LayoutLoad } from './$types';
import { init, waitLocale } from 'svelte-intl-precompile';
import { dev } from '$app/environment';
import { DEFAULT_LANGUAGE } from '$lib/languageConfig.js';
import { registerAll } from '$locales';

export const csr = dev;

// Register all defined languages
registerAll();

export const load: LayoutLoad = async ({ params }) => {
	init({
		fallbackLocale: DEFAULT_LANGUAGE,
		initialLocale: params.lang
	});
	await waitLocale();
	return {};
}
