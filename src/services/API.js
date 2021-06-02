const getCharacters = async () => {
  const res = await fetch('https://trek-dex.herokuapp.com/api/v1/characters');
  const characters = await res.json();
  const formattedCharacters = characters.map((character) => {
    return {
      name: character.name,
      race: character.race,
      image: character.imageUrl,
      faction: character.affiliation,
      id: character.id,
    };
  });

  return formattedCharacters;
};

export default getCharacters;
