import React from 'react';
import CharacterDetail from './CharacterDetail';
import styles from './CharacterList.css';

export default function CharacterList({ theme }) {
  return (
    <section className={styles.displayArea}>
      <p>Character List</p>
      <CharacterDetail />
    </section>
  );
}
