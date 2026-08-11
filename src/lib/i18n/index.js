import { translations } from './translations.js';

/** @typedef {keyof typeof translations} Language */

/** @type {Language} */
export const defaultLanguage = 'en';

/** @type {readonly Language[]} */
export const supportedLanguages = /** @type {readonly Language[]} */ (
  Object.freeze(Object.keys(translations))
);

/**
 * @param {string} language
 * @returns {language is Language}
 */
export function isSupportedLanguage(language) {
  return Object.hasOwn(translations, language);
}

/**
 * Returns the translations for a supported language, falling back to English.
 *
 * @param {string} language
 */
export function getTranslations(language) {
  const languageKey = isSupportedLanguage(language) ? language : defaultLanguage;

  return translations[languageKey];
}

/**
 * Finds a supported language in the first segment of a URL path.
 *
 * @param {string} pathname
 */
export function getLanguageFromPath(pathname) {
  const candidate = pathname.split('/').filter(Boolean)[0] ?? '';
  return isSupportedLanguage(candidate) ? candidate : defaultLanguage;
}
