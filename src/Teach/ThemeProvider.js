import React from 'react';
import ThemeContext from './ThemeContext';
import useToggle from './useToggle';

function ThemeProvider({ children }) {
  const [isDark, toggleTheme] = useToggle(false);
  const theme = isDark ? 'dark' : 'light';

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;