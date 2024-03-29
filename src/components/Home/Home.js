import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Pickle from './Pickle';

import titleHome from '../../images/title-home.png';
import GifNav from '../../images/gif--nav.gif'
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
            src={GifNav}
            alt='gif-nave'
          ></img>
        </div>
        <div className='content__title__img'>
          <img src={titleHome} alt='Title Rick y Morty'></img>
        </div>
        <Pickle />
      </header>
      <Link to='/characters'>
        <div className='button__intro' title="Go Search Characters">Let's Go</div>
      </Link>
    </>
  );
};

export default Home;
