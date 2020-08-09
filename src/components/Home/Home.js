import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import titleHome from '../../images/title-home.png';
import Pickle from './Pickle';
import '../../stylesheets/backgroundSpace.scss';
import '../../stylesheets/Home/home.scss';

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
        <div className='button__intro'>Let's Go</div>
      </Link>
    </>
  );
};

export default Home;
