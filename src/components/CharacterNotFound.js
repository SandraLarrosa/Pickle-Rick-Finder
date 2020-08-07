import React from 'react';
import '../stylesheets/characterNotFound.scss';

const CharacterNotFound = () => {
  return (
    <>
      <div className='stars--Home'></div>
      <div className='twinkling--Home'></div>
      <div className='clouds--Home'></div>
      <section className='section__error'>
        <h3 className='section__error--title'>I can't find that character</h3>
        <div className='section__error--gif'>
          <img
            src='https://media.giphy.com/media/da0NgyClHpA4jqUoav/giphy.gif'
            alt='Gif Rick'
          ></img>
        </div>
      </section>
    </>
  );
};

export default CharacterNotFound;
