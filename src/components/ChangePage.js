import React from 'react';
import IconNextPage from '../images/icons8-next-page-200.png';
import '../stylesheets/changePage.scss';

const ChangePage = (props) => {

  const changePageCharacter = (ev) => {
    const buttonPage = ev.currentTarget.id;
    props.changePage(buttonPage);
  };
  return (
    <>
      <div className='contain__selectPage'>
        <div className='prev__page'>
          <img
            id='prev'
            src={IconNextPage}
            alt='Icon prev pag'
            onClick={changePageCharacter}
          ></img>
          <p>Previous Page</p>
        </div>
        <p className="number__page">Page {props.dataPage} of 30</p>
        <div className='next__page'>
          <img
            id='next'
            src={IconNextPage}
            alt='Icon next pag'
            onClick={changePageCharacter}
          ></img>
          <p>Next page</p>
        </div>
      </div>
    </>
  );
};

export default ChangePage;
