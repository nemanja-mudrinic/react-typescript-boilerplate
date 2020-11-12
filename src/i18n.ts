import i18n from 'i18next';
import I18NextXhrBackend from 'i18next-xhr-backend';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

// translations are already at
// '../public/locales/en/translation.json'
// which is the default for the xhr backend to load from

i18n
  .use(I18NextXhrBackend)
  .use(I18nextBrowserLanguageDetector)
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
  .use(initReactI18next)
  .init({
    fallbackLng: 'en', // use en if detected lng is not available
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    react: {
      wait: true,
      useSuspense: false,
    },
  });

export default i18n;
