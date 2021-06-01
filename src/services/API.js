const getCharacters = async () => {
  const res = await fetch('https://trek-dex.herokuapp.com/api/v1/characters');
  const characters = await res.json();
  const formattedCharacters = characters.map((character) => {
    return {
      name: 'spock',
      age: 18,
      id: '',
    };
  });

  return formattedCharacters;
};

export default getCharacters;

//data res format:
//[
// {
//   "id": "8",
//   "name": "Scotty",
//   "affiliation": "Starfleet Command",
//   "origin": "Earth / Scotland",
//   "race": "Human",
//   "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQMC4XER68IBRWXNe0YdRO5UoSmoLDf3FwQ9g&usqp=CAU"
// }
//]
