import React, { createContext, useState } from 'react';

const baseTheme = {
  red: '#FF0000',
  grey: '#696969',
  lightgrey: '#E1E1E1',
  offWhite: '#F5F5F5',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
  maxWidthVeryLarge: '1800px',
  maxWidthLarge: '1000px',
  maxWidthMedium: '700px',
  maxWidthSmall: '480px',
  maxWidthVerySmall: '390px'
};

const themes = {
  default: {
    name: 'default',
    black: '#000000',
    white: '#FFFFFF',
    ...baseTheme
  },
  dark: {
    name: 'dark',
    white: '#000000',
    black: '#FFFFFF',
    ...baseTheme
  }
};

const ThemeContext = createContext({});

const ThemeContextProvider = ({ children }) => {
  const [selectedTheme, setSelectedTheme] = useState({ ...themes.default });
  const toggleTheme = () => {
    if (selectedTheme && selectedTheme.name === 'default') {
      setSelectedTheme({ ...themes.dark });
    } else if (selectedTheme && selectedTheme.name === 'dark') {
      setSelectedTheme({ ...themes.default });
    }
  };

  return (
    <ThemeContext.Provider value={{ selectedTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
export { ThemeContextProvider };
