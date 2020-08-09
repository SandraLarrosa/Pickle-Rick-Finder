import React from 'react';
import { Link } from 'react-router-dom';
import '../../stylesheets/GifsRandom/getGifs.scss';


const GetGifs = () => {
  return (
    <>
      <Link to='/gifs'>
      <div className='giveMeGifs'>
        <p className='giveMeGifs__text'>Do you want a gif?</p>
        <div className='contain__rickAndMorty'>
          <img
            src='https://media.giphy.com/media/ZYWv9qRQPomHSmrpGd/giphy.gif'
            alt='Rick And Morty'
          ></img>
        </div>
      </div>
      </Link>
    </>
  );
};

export default GetGifs;
