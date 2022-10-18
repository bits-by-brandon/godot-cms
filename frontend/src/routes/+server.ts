import type { RequestHandler } from './$types';
import parser from 'accept-language-parser';
import { base } from '$app/paths';
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from '$lib/languageConfig.js';

export const GET: RequestHandler = ({ request }) => {
	const languageHeader = request.headers.get('Accept-Language');

	// Default to english if no redirect headers provided
	const redirectLanguage = languageHeader
		? parser.pick(SUPPORTED_LANGUAGES, languageHeader) || DEFAULT_LANGUAGE
		: DEFAULT_LANGUAGE;

	// Redirect to the homepage url of the given language
	return new Response(null, {
		status: 301,
		headers: { location: `${base}/${redirectLanguage}` }
	});
};
