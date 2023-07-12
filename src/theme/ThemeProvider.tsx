import { FC, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, themeContext } from './ThemeContext';

// если localStorage пустой, то будет установлена Theme.LIGHT
const defaultTheme = 
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) 
  || Theme.LIGHT;


const ThemeProvider: FC<React.PropsWithChildren> = ({children}) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  // const [theme, setTheme] = useState<Theme>(Theme.LIGHT);
  
  const defaultProps = useMemo(
    () => ({
      theme: theme, setTheme: setTheme
    }), 
    [ theme ]
  );

  return (
    <themeContext.Provider value={ defaultProps }>
      { children }
    </themeContext.Provider>
  );
};


export default ThemeProvider;