import React from 'react';
import PropTypes from 'prop-types';
import Characters from './Characters';
import CharacterNotFound from './CharacterNotFound';
import '../../stylesheets/Characters/listCharacters.scss';



const CharactersList = (props) => {
  if (props.data.length === 0) {
    return <CharacterNotFound />;
  }
  const cards = props.data.map((character) => {
    return (
      <li key={character.id}>
        <Characters
          id={character.id}
          name={character.name}
          specie={character.species}
          status={character.status}
          img={character.image}
        />
      </li>
    );
  });
  return (
    <>
      <div className='stars--CardList'></div>
      <div className='twinkling--CardList'></div>
      <div className='clouds--CardList'></div>
      <main className='section__cards'>
        <ul className='content__card'>{cards}</ul>
      </main>
    </>
  );
};

CharactersList.propTypes = {
  data: PropTypes.array,
}

export default CharactersList;
