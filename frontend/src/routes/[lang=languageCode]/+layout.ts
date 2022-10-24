import type { LayoutLoad } from './$types';
import { init, waitLocale } from 'svelte-intl-precompile';
import { DEFAULT_LANGUAGE } from '$lib/languageConfig.js';
import { registerAll } from '$locales';

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
