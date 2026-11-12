import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { getThemePreference, setTheme } from '../utils/themeUtils';

const ThemeContext = createContext({
  darkMode: true,
  toggleDarkMode: () => {},
});

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const initial = getThemePreference();
    setDarkMode(initial);
    setTheme(initial);
  }, []);

  const toggleDarkMode = useCallback(() => {
    setDarkMode((prev) => {
      const next = !prev;
      setTheme(next);
      return next;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
