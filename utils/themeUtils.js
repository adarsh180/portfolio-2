export const isClient = typeof window !== 'undefined';

export const getThemePreference = () => {
  if (!isClient) return true;
  try {
    const stored = localStorage.getItem('darkMode');
    if (stored !== null) {
      return stored === 'true';
    }
  } catch {
    // Ignore storage access errors
  }
  return true;
};

export const setTheme = (isDark) => {
  if (!isClient) return;
  try {
    localStorage.setItem('darkMode', isDark ? 'true' : 'false');
  } catch {
    // Ignore storage access errors
  }
  if (isDark) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

export const toggleTheme = (currentMode) => {
  const newMode = !currentMode;
  setTheme(newMode);
  return newMode;
};
