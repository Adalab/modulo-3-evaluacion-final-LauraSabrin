const getDataApi = () => {
  return fetch("https://hp-api.onrender.com/api/characters")
    .then((response) => response.json())
    .then((data) => {
      const apiResult = data.map((character) => {
        return {
          name: character.name,
          alternate_names: character.alternate_names[0],
          species: character.species,
          gender: character.gender,
          house: character.house,
          patronus: character.patronus,
          alive: character.alive,
          image: character.image,
          id: character.id,
        };
      });

      return apiResult;
    });
};
export default getDataApi;
