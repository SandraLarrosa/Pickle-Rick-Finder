import React, { useState, useEffect } from 'react';
import '../stylesheets/App.scss';
import '../stylesheets/backgroundSpace.scss';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './Home';
import CharactersList from './CharactersList';
import CharactersDetails from './CharactersDetails';
import getDataCharacterApi from '../data/getDataCharacterApi';
import TitleMain from './TitleMain';
import Filters from './Filters';

function App() {
  const [data, setData] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    getDataCharacterApi(page).then((data) => {
      setData(data.results);
    });
  }, [page]);

  //Función manejadora de evento del input que actualiza el estado del filtro.
  const handleSearch = (data) => {
    if (data.key === 'name') {
      setFilterName(data.value);
    }
  };

  //Filtrado de personajes por nombre del input value. Los pintamos en el componente characterList
  const filterCharacters = data.filter((character) => {
    return character.name.toUpperCase().includes(filterName.toUpperCase());
  });

  //Función que Pintar el personaje individual.
  const renderCharacterDetail = (props) => {
    const characterId = props.match.params.id;
    const foundCharacter = data.find((character) => {
      return character.id === parseInt(characterId);
    });
    return <CharactersDetails data={foundCharacter} />;
  };

  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/Characters'>
          <TitleMain />
          <Filters inputSearch={handleSearch} value={filterName} />
          <CharactersList data={filterCharacters} />
        </Route>
        <Route path='/character/:id' render={renderCharacterDetail} />
      </Switch>
    </>
  );
}

export default App;
