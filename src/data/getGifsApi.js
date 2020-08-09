
  const getGifsApi = () => {
    fetch(
      `https://api.giphy.com/v1/gifs/random?tag=Rick-and-Morty&api_key=NXLgbPLwgfyyYI5r0KBWyB2KB3UA4Zfd`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);;
      });
};
  
export default getGifsApi