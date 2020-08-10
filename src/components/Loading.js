import React from 'react';
import GifPortal from '../images/gifPortal.gif';
import '../stylesheets/loading.scss';
import '../stylesheets/backgroundSpace.scss'

const Loading = () => {
  return (
    <>
      <div className='stars--Home'></div>
      <div className='twinkling--Home'></div>
      <div className='clouds--Home'></div>
      <div className='containLoading'>
        <h4 className='containLoading__title'>Loading...</h4>
        <img
          className='containLoading__img'
          src={GifPortal}
          alt='Gif Portal Loading'
        ></img>
      </div>
    </>
  );
};

export default Loading;
