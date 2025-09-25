import { useEffect, useMemo, useState } from 'react';
import i18n from '@/localization/i18n';
import { StorageService } from '@/services/storage-service';
import { EStorageKey } from '@/types/enum';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type SupportedLanguageCode = 'en' | 'ar';

type LanguageOption = {
  code: SupportedLanguageCode;
  label: string;
  dir: 'ltr' | 'rtl';
};

const LANGUAGE_OPTIONS: LanguageOption[] = [
  { code: 'en', label: 'English', dir: 'ltr' },
  { code: 'ar', label: 'العربية', dir: 'rtl' },
];

const isSupported = (code: string | null): code is SupportedLanguageCode => {
  return LANGUAGE_OPTIONS.some((opt) => opt.code === code);
};

const getInitialLanguage = (): SupportedLanguageCode => {
  const saved = StorageService.get(EStorageKey.TRANSLATION_LANGUAGE);
  if (isSupported(saved)) return saved;
  return 'en';
};

export default function LanguageToggle() {
  const [language, setLanguage] = useState<SupportedLanguageCode>(
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
      value={language}
      onValueChange={(val) => setLanguage(val as SupportedLanguageCode)}
    >
      <SelectTrigger className="w-[140px]">
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
