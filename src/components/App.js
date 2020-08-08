import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

import Home from './Home/Home';
import getDataCharacterApi from '../data/getDataCharacterApi';
import TitleMain from './TitleMain';
import Filters from './Filters';
import ChangePage from './ChangePage';
import CharactersList from './Characters/CharactersList';
import CharactersDetails from './Characters/CharactersDetails';
import CharacterNotFound from './Characters/CharacterNotFound';

import '../stylesheets/App.scss';
import '../stylesheets/backgroundSpace.scss';


function App() {
  const [data, setData] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [orderCharacters, setOrderCharacters] = useState(false);
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

  //Función que ordena en orden alfabético los personajes
  const handleOrder = () => {
    if (orderCharacters !== true) {
      console.log('Estoy en ordenar');
      console.log(data[0]);
      setOrderCharacters(true);
      data.sort((a, b) =>
        a.name.toUpperCase().localeCompare(b.name.toUpperCase())
      );
    } else {
      console.log('Estoy desordenado');
      setOrderCharacters(false);
      data.sort((a, b) => {
        if (a.id > b.id) {
          return 1;
        } else if (a.id < b.id) {
          return -1;
        }
        return 0;
      });
    }
  };

  //Filtrado de personajes por nombre del input value. Los pintamos en el componente characterList
  const filterCharacters = data.filter((character) => {
    return character.name.toUpperCase().includes(filterName.toUpperCase());
  });

  //Función que Pinta el personaje individual y hace que vuelva a llamar a la Api cuando estamos navegando en los personajes individuales
  const renderCharacterDetail = (props) => {
    const characterId = props.match.params.id;
    const nextPage = Math.floor(characterId / 20);
    if (characterId % 20 === 0) {
      setPage(nextPage);
    } else {
      setPage(nextPage + 1);
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

  //Función que maneja los botones para cambiar de página
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
          <Filters
            inputSearch={handleSearch}
            value={filterName}
            orderCheck={handleOrder}
            orderCharacters={orderCharacters}
          />
          <ChangePage changePage={handleChangePage} dataPage={page} />
          <CharactersList data={filterCharacters} />
          <ChangePage changePage={handleChangePage} dataPage={page} />
        </Route>
        <Route path='/characters/:id' render={renderCharacterDetail} />
      </Switch>
    </>
  );
}

export default App;
