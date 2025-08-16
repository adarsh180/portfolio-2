import { createContext, useContext, useState, useEffect } from 'react';
import { getThemePreference, setTheme } from '../utils/themeUtils';

const ThemeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {},
});

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setDarkMode(getThemePreference());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      setTheme(darkMode);
    }
  }, [darkMode, mounted]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}