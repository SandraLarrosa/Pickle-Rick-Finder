import React from 'react';
import '../stylesheets/filters.scss'

const Filters = (props) => {
  const handleSearch = (ev) => {
    props.inputSearch({
      value: ev.currentTarget.value,
      key: 'name',
    });
  };

  const evPrevent = (ev) => {
    ev.preventDefault();
  };
  return (
    <>
      <div className="form__search">
        <form onSubmit={evPrevent}>
          <label htmlFor='search'>
            <input
              className='inputSearch'
              type='text'
              placeholder='Search Character'
              id='search'
              name='search'
              value={props.value}
              onChange={handleSearch}
            ></input>
          </label>
        </form>
      </div>
    </>
  );
};

export default Filters;
