import { StorageService } from '@/services/storage-service';
import { type TAppTranslation } from './types/index';
import { enTranslations } from './en';
// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { arTranslations } from './ar';
import { EStorageKey } from '@/lib/enums/enum';

export const DEFAULT_LANGUAGE = 'en';

const translations: Record<string, { translation: TAppTranslation }> = {
  en: { translation: enTranslations },
  ar: { translation: arTranslations },
};

const savedLanguage =
  StorageService.get(EStorageKey.TRANSLATION_LANGUAGE) ?? DEFAULT_LANGUAGE;

if (!StorageService.get(EStorageKey.TRANSLATION_LANGUAGE)) {
  StorageService.set(EStorageKey.TRANSLATION_LANGUAGE, DEFAULT_LANGUAGE);
}

i18n.use(initReactI18next).init({
  resources: translations,
  lng: savedLanguage,
  fallbackLng: DEFAULT_LANGUAGE,
  interpolation: {
    escapeValue: false,
  },
});

i18n.changeLanguage(
  StorageService.get(EStorageKey.TRANSLATION_LANGUAGE) ?? DEFAULT_LANGUAGE
);

export default i18n;
