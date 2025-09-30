import { useEffect, useMemo, useState } from 'react';
import i18n from '@/localization/i18n';
import { StorageService } from '@/services/storage-service';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  EStorageKey,
  ETranslationLanguage,
  type ELanguageOption,
  type ESupportedLanguageCode,
  EDIRECTION,
} from '@/lib/enums/enum';

const LANGUAGE_OPTIONS: ELanguageOption[] = [
  { code: ETranslationLanguage.EN, label: 'English', dir: EDIRECTION.LTR },
  { code: ETranslationLanguage.AR, label: 'العربية', dir: EDIRECTION.RTL },
];

const isSupported = (code: string | null): code is ESupportedLanguageCode => {
  return LANGUAGE_OPTIONS.some((opt) => opt.code === code);
};

const getInitialLanguage = (): ESupportedLanguageCode => {
  const saved = StorageService.get(EStorageKey.TRANSLATION_LANGUAGE);
  if (isSupported(saved as string)) return saved as ESupportedLanguageCode;
  return ETranslationLanguage.EN;
};

export default function LanguageToggle() {
  const [language, setLanguage] = useState<ESupportedLanguageCode>(
    getInitialLanguage()
  );

  const currentOption = useMemo(
    () =>
      LANGUAGE_OPTIONS.find((o) => o.code === language) ?? LANGUAGE_OPTIONS[0],
    [language]
  );

  useEffect(() => {
    void i18n.changeLanguage(language);
    StorageService.set(EStorageKey.TRANSLATION_LANGUAGE, language);

    const htmlEl = document.documentElement;
    htmlEl.dir = currentOption.dir;
    htmlEl.lang = language;
  }, [language, currentOption.dir]);

  return (
    <Select
      key={language}
      value={language}
      onValueChange={(val) => setLanguage(val as ESupportedLanguageCode)}
    >
      <SelectTrigger className="w-[100px]">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent align="end">
        {LANGUAGE_OPTIONS.map((opt) => (
          <SelectItem key={opt.code} value={opt.code}>
            {opt.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
