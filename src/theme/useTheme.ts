import { LOCAL_STORAGE_THEME_KEY, Theme } from './ThemeContext';
import { useContext } from 'react';
import { themeContext } from './ThemeContext';


interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme
}

export function useTheme(): UseThemeResult {
  const {theme, setTheme} = useContext(themeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  }

  return { 
    theme, 
    toggleTheme 
  };

};
