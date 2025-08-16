// Check if we're on the client side
export const isClient = typeof window !== 'undefined';

// Get the user's theme preference
export const getThemePreference = () => {
  if (!isClient) return false;
  
  // Check localStorage first
  if (localStorage.getItem('darkMode') !== null) {
    return localStorage.getItem('darkMode') === 'true';
  }
  
  // If no localStorage value, check system preference
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

// Set the theme in localStorage and apply to document
export const setTheme = (isDark) => {
  if (!isClient) return;
  
  localStorage.setItem('darkMode', isDark ? 'true' : 'false');
  
  if (isDark) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

// Toggle between light and dark mode
export const toggleTheme = (currentMode) => {
  const newMode = !currentMode;
  setTheme(newMode);
  return newMode;
};