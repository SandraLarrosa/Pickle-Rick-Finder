import React from 'react';
import TitleMain from './TitleMain';
import { Link } from 'react-router-dom';
import '../stylesheets/characterDetails.scss';
import '../stylesheets/backgroundSpace.scss';

const CharactersDetails = (props) => {
  return (
    <>
      <div className='stars--Home'></div>
      <div className='twinkling--Home'></div>
      <div className='clouds--Home'></div>
      <TitleMain />
      <main className='main__characterContain'>
        <article className='characterContain'>
          <div className='characterContain__img'>
            <img src={props.data.image} alt={props.data.name}></img>
          </div>
          <div className='characterContain__text'>
            <span className='text--title'>
              <h3>{props.data.name}</h3>
              <Link to='/Characters'>
                <i className='far fa-times-circle'></i>
              </Link>
            </span>
            <span className='text--specie'>
              <h4>Specie:</h4>
              <p>{props.data.species}</p>
            </span>
            <span className='text--origin'>
              <h4>Origin:</h4>
              <p>{props.data.origin.name}</p>
            </span>
            <span className='text--status'>
              <h4>Status:</h4>
              <p>{props.data.status}</p>
            </span>
            <span className='text--episodes'>
              <h4>Number Episodes:</h4>
              <p>{props.data.episode.length}24</p>
            </span>
          </div>
        </article>
      </main>
    </>
  );
};

export default CharactersDetails;
