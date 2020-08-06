import React from 'react';
import '../stylesheets/filters.scss'

const Filters = (props) => {

  return (
    <>
      <div className="form__search">
        <form >
          <label htmlFor='search'>
            <input
              className='inputSearch'
              type='text'
              placeholder='Search Character'
              id='search'
              name='search'
            ></input>
          </label>
        </form>
      </div>
    </>
  );
};

export default Filters;
