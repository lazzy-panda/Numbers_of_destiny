import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importing translation files
import en from './locales/en.json';
import ru from './locales/ru.json';

i18n
    // Pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // Init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        resources: {
            en: {
                translation: en,
            },
            ru: {
                translation: ru,
            },
        },
        lng: "en", // If you want to use a language detector, you can configure it here
        fallbackLng: "en",
        interpolation: {
            escapeValue: false, // Not needed for React as it escapes by default
        },
    });

export default i18n;
