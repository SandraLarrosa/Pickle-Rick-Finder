import React, { useState, useEffect } from 'react';
import getQuoteApi from '../../data/getQuoteApi';
import '../../stylesheets/Home/pickle.scss';

const Pickle = () => {
  const [dataQuote, setQuote] = useState([
    `Hi! I'm Pickle Rick and I have something to tell you.`,
  ]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      getQuoteApi().then((data) => {
        if (data.data[0].length >= 120) {
          return dataQuote;
        }
        setQuote(data.data);
      });
    }, 6000);

    return () => {
      clearInterval(intervalId);
    };
  }, [dataQuote]);

  return (
    <>
      <div className='content__gif__cucum'>
        <div className='contain__quote'>
          <p className='contain__quote__quote'>"{dataQuote[0]}"</p>
        </div>
        <div className='bubble'></div>
        <img
          src='https://media.giphy.com/media/5tmq8Z3eXXOpgE8Dou/giphy.gif'
          alt='Gif Pickle Rick'
          title='Gif Pickle Rick'
        ></img>
      </div>
    </>
  );
};

export default Pickle;
