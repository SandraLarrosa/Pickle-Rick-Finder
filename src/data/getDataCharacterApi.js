

const getDataCharacterApi = (pageNum) => {
  return fetch(
    `https://rickandmortyapi.com/api/character/?page=${pageNum}`
  ).then((response) => response.json());
};

export default getDataCharacterApi;
