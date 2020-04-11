import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import translations from 'lang/translations'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector) // passes i18n down to react-i18next
  .init({
    resources: translations,
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  })

export default i18n
