import React from 'react';
import '../stylesheets/title.scss';
import TitleRickAndMorty from '../images/title-cards.png';

const TitleMain = (props) => {
  return (
    <header className='header__title'>
        <div className='img__title'>
          <img src={TitleRickAndMorty} alt='Title Rick and Morty'></img>
        </div>
    </header>
  );
};

export default TitleMain;
