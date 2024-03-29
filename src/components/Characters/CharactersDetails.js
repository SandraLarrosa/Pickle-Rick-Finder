import React from 'react';
import { Link } from 'react-router-dom';
import TitleMain from '../TitleMain';
import PropTypes from 'prop-types';
import deadIcon from '../../images/icons8-headstone-64.png';
import iconNext from '../../images/icons8-next-page-200.png';
import IconPrevPage from '../../images/icons8-prev-page-200.png';

import '../../stylesheets/Characters/characterDetails.scss';
import '../../stylesheets/backgroundSpace.scss';

const CharactersDetails = (props) => {
  const dead = props.data.status === 'Dead' ? deadIcon : '';

  return (
    <>
      <div className='stars--Home'></div>
      <div className='twinkling--Home'></div>
      <div className='clouds--Home'></div>
      <TitleMain />
      <main className='main__characterContain'>
        <Link to={`/characters/${props.data.id - 1}`}>
          <img
            className='icon__prev'
            src={`${IconPrevPage}`}
            alt='icon__prev'
          ></img>
        </Link>
        <article className='characterContain'>
          <div className='characterContain__img'>
            <img src={props.data.image} alt={props.data.name}></img>
          </div>
          <div className='characterContain__text'>
            <span className='text--title'>
              <h3>{props.data.name}</h3>
              <Link to='/characters'>
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
              <h4>Episodes:</h4>
              <p>{props.data.episode.length}</p>
            </span>
            <div className='containIcons'>
              <img className='icon' src={`${dead}`} alt=''></img>
            </div>
          </div>
        </article>
        <Link to={`/characters/${props.data.id + 1}`}>
          <img
            className='icon__next'
            src={`${iconNext}`}
            alt='icon__next'
          ></img>
        </Link>
      </main>
    </>
  );
};

CharactersDetails.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  species: PropTypes.string,
  image: PropTypes.string,
  origin: PropTypes.object,
  episode: PropTypes.array,
}

export default CharactersDetails;
