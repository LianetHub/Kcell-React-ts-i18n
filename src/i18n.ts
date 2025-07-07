import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enTranslation from "./locales/en/translation.json";
import ruTranslation from "./locales/ru/translation.json";

export type Resources = {
	translation: typeof enTranslation;
};

const resources = {
	en: {
		translation: enTranslation,
	},
	ru: {
		translation: ruTranslation,
	},
} as const;

declare module "i18next" {
	interface CustomTypeOptions {
		resources: (typeof resources)["en"]; // Здесь указываем тип для ресурсов,
		// чтобы t() знал о ваших ключах.
		// Можно также использовать { en: Resources; ru: Resources; }
	}
}

i18n.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources,
		fallbackLng: "en",
		debug: true,
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
