import { StorageService } from '@/services/storage-service';
import { enTranslations } from './en';

import i18n, { type Resource, type InitOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { arTranslations } from './ar';
import { EStorageKey, ETranslationLanguage } from '@/lib/enums/enum';

export const DEFAULT_LANGUAGE = ETranslationLanguage.EN;

const resources: Resource = {
  [ETranslationLanguage.EN]: { translation: enTranslations },
  [ETranslationLanguage.AR]: { translation: arTranslations },
};

const savedLanguage =
  StorageService.get(EStorageKey.TRANSLATION_LANGUAGE) ?? DEFAULT_LANGUAGE;

if (!StorageService.get(EStorageKey.TRANSLATION_LANGUAGE)) {
  StorageService.set(EStorageKey.TRANSLATION_LANGUAGE, DEFAULT_LANGUAGE);
}

const options: InitOptions = {
  resources,
  lng: savedLanguage as string,
  fallbackLng: DEFAULT_LANGUAGE,
  interpolation: { escapeValue: false },
};

i18n.use(initReactI18next).init(options);

i18n.changeLanguage(
  (StorageService.get(EStorageKey.TRANSLATION_LANGUAGE) as string) ??
    DEFAULT_LANGUAGE
);

export default i18n;
