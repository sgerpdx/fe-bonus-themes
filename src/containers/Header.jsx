import React from 'react';
import ThemeControl from '../components/controls/ThemeControl';
import styles from '../components/app/App.css';
import { useTheme } from '../state/ThemeProvider';
import PropTypes from 'prop-types';

export default function Header() {
  const theme = useTheme();
  return (
    <div
      className={`${
        theme === 'earth'
          ? styles.headerThemeEarth
          : theme === 'vulcan'
          ? styles.headerThemeVulcan
          : styles.headerThemeSpace
      }`}
    >
      <ThemeControl />
    </div>
  );
}

Header.PropTypes = {
  theme: PropTypes.string.isRequired,
};
