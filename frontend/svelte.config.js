import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		alias: {
			"$components": "src/components",
			"$stores": "src/stores",
			"$styles": "src/styles",
			"$assets": "src/assets",
			"$providers": "src/providers",
		},
	},

};

export default config;
