import { getLanguageFromPath } from '$lib/i18n/index.js';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  const language = getLanguageFromPath(event.url.pathname);

  return resolve(event, {
    transformPageChunk: ({ html }) => html.replace('%lang%', language)
  });
}
