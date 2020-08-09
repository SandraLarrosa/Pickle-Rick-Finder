

const getGifsApi = () => {
  return fetch(
    `https://api.giphy.com/v1/gifs/random?tag=rick-and-morty&api_key=NXLgbPLwgfyyYI5r0KBWyB2KB3UA4Zfd`
  ).then((response) => response.json())
};

export default getGifsApi;
