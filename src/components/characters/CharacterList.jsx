import React from 'react';
import CharacterDetail from './CharacterDetail';
import styles from '../app/App.css';

export default function CharacterList({ theme, characters }) {
  return (
    <section className={styles.displayArea}>
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
