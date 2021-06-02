import React from 'react';
import CharacterDetail from './CharacterDetail';
import styles from '../app/App.css';
import { useTheme } from '../../state/ThemeProvider';
import PropTypes from 'prop-types';

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

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      race: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      faction: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
