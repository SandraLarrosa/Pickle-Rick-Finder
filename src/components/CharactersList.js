import React from 'react';
import Characters from './Characters';
import '../stylesheets/listCharacters.scss';
import CharacterNotFound from './CharacterNotFound';

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

export default CharactersList;
