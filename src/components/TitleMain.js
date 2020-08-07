import React from 'react';
import { Link } from 'react-router-dom';
import Pickle from './Pickle';
import '../stylesheets/title.scss';
import TitleRickAndMorty from '../images/title-cards.png';

const TitleMain = (props) => {
  return (
    <header className='header__title'>
      <Link to='/'>
        <div className='img__title'>
          <img src={TitleRickAndMorty} alt='Title Rick and Morty'></img>
        </div>
      </Link>
    </header>
  );
};

export default TitleMain;
