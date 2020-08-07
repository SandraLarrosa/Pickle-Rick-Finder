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
import ChangePage from './ChangePage';
import CharacterNotFound from './CharacterNotFound';

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
    const nextPage = Math.floor(characterId / 20);
    if (characterId % 20 === 0) {
      setPage(nextPage)
    } else {
      setPage(nextPage+1)
    }
    const foundCharacter = data.find((character) => {
      return character.id === parseInt(characterId);
    });
    if (foundCharacter) {
      return <CharactersDetails data={foundCharacter} />;
    } else {
      return <CharacterNotFound />;
    }
  };

  const handleChangePage = (button) => {
    if (button === 'prev' && page > 1) {
      setPage(page - 1);
    } else if (button === 'next' && page < 30) {
      setPage(page + 1);
    }
  };

  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/characters'>
          <TitleMain />
          <Filters inputSearch={handleSearch} value={filterName} />
          <ChangePage changePage={handleChangePage} dataPage={page}/>
          <CharactersList data={filterCharacters} />
          <ChangePage changePage={handleChangePage} dataPage={page}/>
        </Route>
        <Route path='/characters/:id' render={renderCharacterDetail} />
      </Switch>
    </>
  );
}

export default App;
