import { EStorageKey, ETheme, EThemeError } from '@/lib/enums/enum';
import { StorageService } from '@/services/storage-service';
import { createContext, useContext, useEffect, useState } from 'react';

type Theme = ETheme;

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: ETheme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: ETheme.SYSTEM,
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = ETheme.SYSTEM,
  storageKey = EStorageKey.UI_THEME,
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] =
    useState<ETheme>(StorageService.get(storageKey) as ETheme) || defaultTheme;

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(ETheme.LIGHT, ETheme.DARK);

    if (theme === ETheme.SYSTEM) {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? ETheme.DARK
        : ETheme.LIGHT;

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      StorageService.set(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) throw new Error(EThemeError.THEME_PROVIDER_ERROR);

  return context;
};
