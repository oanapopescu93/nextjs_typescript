'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { i18n as nextI18NextConfig } from '../../next-i18next.config';

i18n
  .use(initReactI18next)
  .init({
    lng: nextI18NextConfig.defaultLocale,
    fallbackLng: nextI18NextConfig.defaultLocale,
    supportedLngs: nextI18NextConfig.locales,
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        common: require('../../public/locales/en/common.json'),
      },
      ro: {
        common: require('../../public/locales/ro/common.json'),
      },
    },
  });

export default i18n;
