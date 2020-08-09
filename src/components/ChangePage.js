import React from 'react';
import PropTypes from 'prop-types';
import IconNextPage from '../images/icons8-next-page-200.png';
import IconPrevPage from '../images/icons8-prev-page-200.png';
import '../stylesheets/changePage.scss';

const ChangePage = (props) => {

  const changePage = (ev) => {
    const buttonPage = ev.currentTarget.id;
    props.changePage(buttonPage);
  };

  return (
    <>
      <div className='contain__selectPage'>
        <div className='prev__page'>
          <img
            id='prev'
            src={IconPrevPage}
            alt='Icon prev pag'
            onClick={changePage}
            title="Go Previous Page"
          ></img>
          <p>Previous Page</p>
        </div>
        <p className="number__page">Page {props.dataPage} of 30</p>
        <div className='next__page'>
          <img
            id='next'
            src={IconNextPage}
            alt='Icon next pag'
            onClick={changePage}
            title="Go Next Page"
          ></img>
          <p>Next page</p>
        </div>
      </div>
    </>
  );
};

ChangePage.propTypes = {
  changePage: PropTypes.func,
  dataPage: PropTypes.number,
};

export default ChangePage;
