import React, { useState, useEffect } from 'react';
import TitleMain from '../TitleMain';
import getGifsApi from '../../data/getGifsApi';
import '../../stylesheets/backgroundSpace.scss';

const Gif = (props) => {
  const [gifs, setGifs] = useState(
    'https://media.giphy.com/media/tJqyalvo9ahykfykAj/giphy.gif'
  );

  /*  useEffect(() => {
      getGifsApi().then((gif) => {
        setGif(gif.data.image_url);
      });
    }, []); */

  return (
    <div>
      <div className='stars--Home'></div>
      <div className='twinkling--Home'></div>
      <div className='clouds--Home'></div>
      <TitleMain />
      <section>
        <div>Give Me One More</div>
        <div>Go Back</div>
        <div>
          <img src={`${gifs}`} alt='Gif Rick and Morty'></img>
        </div>
      </section>
    </div>
  );
};

export default Gif;
