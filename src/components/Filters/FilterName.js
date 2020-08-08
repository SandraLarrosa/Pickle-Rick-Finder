import React from 'react';
import PropTypes from 'prop-types';

const FilterName = (props) => {
  const handleSearch = (ev) => {
    props.filters({
      value: ev.currentTarget.value,
      key: 'name',
    });
  };
  return (
    <>
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
    </>
  );
};

FilterName.propTypes = {
  value: PropTypes.string,
  inputSearch: PropTypes.func,
  orderCharacters: PropTypes.bool,
  orderCheck: PropTypes.func,
};

export default FilterName;
