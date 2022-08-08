import { detect } from '../basics/language';

import de from '../config/de.json';
import en from '../config/en.json';

const supportedLanguages = ['en', 'de'];
const defaultLanguage = 'en';
const languages = {
	de: de,
	en: en,
};

const getCurrentLanguage = () => detect(supportedLanguages, defaultLanguage);
const getDefaultTexts = () => languages[defaultLanguage];
const getTexts = () => languages[getCurrentLanguage()];

export { supportedLanguages, defaultLanguage, getDefaultTexts, getTexts, getCurrentLanguage };
