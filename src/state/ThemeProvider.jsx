import React, { createContext, useState, useContext } from 'react';
//import PropTypes from 'prop-types';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('space');

  const handleThemeChange = (e) => {
    setTheme((theme) => (theme = e.target.value));
  };

  const state = { theme, handleThemeChange };

  return (
    <ThemeContext.Provider value={state}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const { theme } = useContext(ThemeContext);
  return theme;
};

export const useThemeChange = () => {
  const { handleThemeChange } = useContext(ThemeContext);
  return handleThemeChange;
};

export default ThemeProvider;
