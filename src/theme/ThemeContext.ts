import { createContext } from 'react';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

export interface ThemeContextProps {
  // теккущая тема
  theme?: Theme,
  // функция смены темы
  setTheme?: (theme: Theme) => void;
}

export const themeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';