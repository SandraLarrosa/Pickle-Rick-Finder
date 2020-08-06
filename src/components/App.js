import React, { useState, useEffect } from 'react';
import '../stylesheets/App.scss';
import '../stylesheets/backgroundSpace.scss';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import CharactersList from './CharactersList';
import CharactersDetails from './CharactersDetails';
import getDataCharacterApi from '../data/getDataCharacterApi';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getDataCharacterApi().then((data) => {
      setData(data.results);
    });
  }, []);

  return (
    <>
      <Filters />
      <CharactersList data={data} />
    </>
  );
}

export default App;
