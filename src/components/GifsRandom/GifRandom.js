import React from 'react';
import '../../stylesheets/GifsRandom/gifsRandom.scss';
import RickAndMorty from '../../images/rick_and_morty.png';

const gifRandom = (props) => {
  return (
    <>
      <div className='giveMeGifs'>
        <p className='giveMeGifs__text'>Do you want a gif?</p>
        <div className='contain__rickAndMorty'>
          <img src={`${RickAndMorty}`} alt='Rick And Morty'></img>
        </div>
      </div>
    </>
  );
};

export default gifRandom;
