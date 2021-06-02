import React, { useState, useEffect } from 'react';
import CharacterList from '../components/characters/CharacterList';
import getCharacters from '../services/API';

export default function ListContainer({ theme }) {
  const [loading, setLoading] = useState(true);
  const [charList, setCharList] = useState([]);

  useEffect(() => {
    getCharacters()
      .then(setCharList)
      .finally(() => setLoading(false));
  });

  if (loading) return <h2>Loading...</h2>;

  return (
    <div>
      <h4>Container</h4>
      <CharacterList theme={theme} characters={charList} />
    </div>
  );
}
