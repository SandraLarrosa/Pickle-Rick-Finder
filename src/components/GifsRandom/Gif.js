import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import getGifsApi from '../../data/getGifsApi';
import TitleMain from '../TitleMain';
import '../../stylesheets/backgroundSpace.scss';
import '../../stylesheets/GifsRandom/gifs.scss';

const Gif = () => {
  const [gifs, setGifs] = useState();

  useEffect(() => {
    getGifsApi().then((gif) => {
      setGifs(gif.data.image_url);
    });
  }, []);

  const getNewGif = () => {
    getGifsApi().then((gif) => {
      setGifs(gif.data.image_url);
    });
  };

  return (
    <div>
      <div className='stars--Home'></div>
      <div className='twinkling--Home'></div>
      <div className='clouds--Home'></div>
      <TitleMain />
      <section className='contain__gifsRandom'>
        <div className='button__giveMeMore' onClick={getNewGif}>
          Give Me One More
        </div>
        <div className='contain__gif'>
          <img src={`${gifs}`} alt='Gif Rick and Morty'></img>
        </div>
        <Link to='/characters'>
          <div className='button__goBack'>Go Back</div>
        </Link>
      </section>
    </div>
  );
};

export default Gif;
