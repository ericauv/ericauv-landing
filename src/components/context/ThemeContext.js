import React, { createContext, useState } from 'react';

const baseTheme = {
  red: '#FF0000',
  grey: '#696969',
  offWhite: '#F5F5F5',
  bs: '0 3px 6px 0 rgba(0, 0, 0, 0.2)',
  bsUp: '1px -1px 3px rgba(0, 0, 0, 0.4)',
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
    lightGrey: '#C1C1C1',
    textStroke: '1.2px #000000',
    textStrokeInverted: '1px #FFFFFF',
    ...baseTheme
  },
  dark: {
    name: 'dark',
    white: '#000000',
    black: '#FFFFFF',
    lightGrey: '#696969',
    textStroke: '1px #FFFFFF',
    textStrokeInverted: '1.2px #000000',
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
