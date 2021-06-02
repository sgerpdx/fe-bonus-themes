import React from 'react';
import ThemeControl from '../components/controls/ThemeControl';
import styles from '../components/app/App.css';
import { useTheme } from '../state/ThemeProvider';

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
