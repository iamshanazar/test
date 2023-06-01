import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '@/locales/en.json';
import ru from '@/locales/ru.json';
import tk from '@/locales/tk.json';

export const defaultNS = 'translations';
export const resources = {
	tk: {
		translations: tk,
	},
	en: {
		translations: en,
	},
	ru: {
		translations: ru,
	},
} as const;

i18n.use(initReactI18next).init({
	fallbackLng: 'tk',
	lng: 'tk',
	resources: {
		tk: {
			translations: tk,
		},
		en: {
			translations: en,
		},
		ru: {
			translations: ru,
		},
	},
	ns: ['translations'],
	defaultNS: 'translations',
	interpolation: {
		escapeValue: false,
	},
});

i18n.languages = ['tk', 'en', 'ru'];

export default i18n;
