import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/character.scss';
import iconDead from '../images/dead.png';

const Characters = (props) => {
  const dead = props.status === 'Dead' ? iconDead : '';
  return (
    <>
      <Link to={`/character/${props.id}`}>
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

export default Characters;
