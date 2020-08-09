import React from 'react';
import { Link } from 'react-router-dom';
import TitleRickAndMorty from '../images/title-cards.png';
import '../stylesheets/title.scss';

const TitleMain = () => {
  return (
    <header className='header__title'>
      <Link to='/'>
        <div className='img__title'>
          <img
            src={TitleRickAndMorty}
            alt='Title Rick and Morty'
            title='Go Home'
          ></img>
        </div>
      </Link>
    </header>
  );
};

export default TitleMain;
