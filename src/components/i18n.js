import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: true,
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          learn: 'Learn React',
          description: 'Edit and save to React',
        },
      },
      uk: {
        translation: {
          learn: 'Вивчаємо React',
          description: 'Редагуємо та зберігаємо в React',
        },
      },
    },
  });

export default i18n;
