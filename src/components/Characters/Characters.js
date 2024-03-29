import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import iconDead from '../../images/icons8-headstone-64.png';
import '../../stylesheets/Characters/character.scss';

const Characters = (props) => {
  const dead = props.status === 'Dead' ? iconDead : '';
  return (
    <>
      <Link to={`/characters/${props.id}`}>
        <article id={props.id} className='card__character'>
          <div className='card__contentImg'>
            <div className='card__contentImg__img'>
              <img src={props.img} alt={props.name}></img>
            </div>
          </div>
          <div className='card__contentData'>
            <h3 className='card__contentData__name'>{props.name}</h3>
            <span className='card__contentData__specie'>
              <h4 className='card__contentData__specie--title'>Specie:</h4> 
              <p className='card__contentData__specie--specie'>
                {props.specie}
              </p>
            </span>
            <span className='card__contentData__status'>
              <img src={`${dead}`} alt=''></img>
            </span>
          </div>
        </article>
      </Link>
    </>
  );
};

Characters.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  specie: PropTypes.string,
  img: PropTypes.string
}

export default Characters;
