import React from 'react';
import CharacterDetail from './CharacterDetail';
import styles from './CharacterList.css';

export default function CharacterList({ theme, characters }) {
  return (
    <section className={styles.displayArea}>
      <p>Character List</p>
      <ul aria-label="Character Grid">
        {characters.map((character) => (
          <li key={character.id}>
            <CharacterDetail {...character} />
          </li>
        ))}
      </ul>
    </section>
  );
}
