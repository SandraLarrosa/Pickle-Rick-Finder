const ENDPOINT = 'http://loremricksum.com/api/?quotes=1';

const getQuoteApi = () => {
  return fetch(ENDPOINT).then((response) => response.json());
};

export default getQuoteApi;
