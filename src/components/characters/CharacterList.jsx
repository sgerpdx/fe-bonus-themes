import React from 'react';
import CharacterDetail from './CharacterDetail';
import styles from '../app/App.css';
import { useTheme } from '../../state/ThemeProvider';

export default function CharacterList({ characters }) {
  const theme = useTheme();
  return (
    <section
      className={`${
        theme === 'earth'
          ? styles.displayAreaEarth
          : theme === 'vulcan'
          ? styles.displayAreaVulcan
          : styles.displayAreaSpace
      }`}
    >
      <ul aria-label="Character Grid" className={styles.characterGrid}>
        {characters.map((character) => (
          <li key={character.id}>
            <CharacterDetail {...character} />
          </li>
        ))}
      </ul>
    </section>
  );
}
