import React, { useState, useEffect } from 'react';
import TitleMain from '../TitleMain';
import getGifsApi from '../../data/getGifsApi';
import '../../stylesheets/backgroundSpace.scss';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Gif = (props) => {
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
      <section>
        <div onClick={getNewGif}>Give Me One More</div>
        <Link to='/characters'>
          <div>Go Back</div>
        </Link>
        <div>
          <img src={`${gifs}`} alt='Gif Rick and Morty'></img>
        </div>
      </section>
    </div>
  );
};

export default Gif;
