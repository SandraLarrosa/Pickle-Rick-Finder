import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

import Home from './Home/Home';
import getDataCharacterApi from '../data/getDataCharacterApi';
import TitleMain from './TitleMain';
import Filters from './Filters/Filters';
import ChangePage from './ChangePage';
import CharactersList from './Characters/CharactersList';
import CharactersDetails from './Characters/CharactersDetails';
import CharacterNotFound from './Characters/CharacterNotFound';
import GetGifs from './GifsRandom/GetGifs';
import GifsRandom from './GifsRandom/GifsRandom';
import Loading from './Loading';

function App() {
  const [data, setData] = useState([]); //Estado datos personajes iniciales
  const [filterName, setFilterName] = useState(localStorage.getItem('filterName') || ''); //Estado del input de búsqueda de personaje
  const [filterStatus, setFilterStatus] = useState('All'); //Estado del select del estado del personaje
  const [checkOrderCharacters, setCheckOrderCharacters] = useState(false); //Estado del checkbox para ordenar los personajes
  const [page, setPage] = useState(1); //Estado de la página inicial
  const [loading, setLoading] = useState(false);

  //Llamada a la Api
  useEffect(() => {
    setLoading(true);
    getDataCharacterApi(page).then((data) => {
      setData(data.results);
      setLoading(false);
    });
  }, [page]);


  useEffect(() => {
    localStorage.setItem('filterName', filterName);
  }, [filterName]);

  //Función manejadora de evento del input y del select que actualiza el estado del Input y del Select.
  const handleFilters = (data) => {
    if (data.key === 'name') {
      setFilterName(data.value);
    } else if (data.key === 'status') {
      setFilterStatus(data.value);
    }
  };

  //Filtrado de personajes por el valor del Input y de los caracteres.
  const filterCharacters = data
    .filter((character) => {
      return character.name.toUpperCase().includes(filterName.toUpperCase());
    })
    .filter((character) => {
      return filterStatus === 'All'
        ? true
        : character.status.toUpperCase() === filterStatus.toUpperCase();
    });

  //Función que ordena en orden alfabético los personajes
  const handleOrder = () => {
    if (checkOrderCharacters !== true) {
      setCheckOrderCharacters(true);
      data.sort((a, b) =>
        a.name.toUpperCase().localeCompare(b.name.toUpperCase())
      );
    } else {
      setCheckOrderCharacters(false);
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

  const printCharacters =
    loading === true ? <Loading /> : <CharactersList data={filterCharacters} />;

  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/characters'>
          <TitleMain />
          <GetGifs />
          <Filters
            handleFilters={handleFilters}
            value={filterName}
            handleOrder={handleOrder}
            orderCharacters={checkOrderCharacters}
          />
          <ChangePage changePage={handleChangePage} dataPage={page} />
          {printCharacters}
        </Route>
        <Route path='/characters/:id' render={renderCharacterDetail} />
        <Route path='/gifs' component={GifsRandom} />
      </Switch>
    </>
  );
}

export default App;
