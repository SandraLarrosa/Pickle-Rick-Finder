import React from 'react';
import titleHome from '../images/title-home.png';
import '../stylesheets/home.scss';
import '../stylesheets/backgroundSpace.scss';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Pickle from './Pickle';

const Home = () => {
  return (
    <>
      <div className='stars--Home'></div>
      <div className='twinkling--Home'></div>
      <div className='clouds--Home'></div>
      <header className='content__title'>
        <div className='content__gif__nave'>
          <img
            src='https://media.giphy.com/media/gJ2TzwqdRoKoZ0KWhW/giphy.gif'
            alt='gif-nave'
          ></img>
        </div>
        <div className='content__title__img'>
          <img src={titleHome} alt='Title Rick y Morty'></img>
        </div>
        <Pickle />
      </header>
      <Link to='/characters'>
        <div className='button__intro'>Comenzar</div>
      </Link>
    </>
  );
};

export default Home;
