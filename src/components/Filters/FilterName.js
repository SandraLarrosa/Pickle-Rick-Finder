import React from 'react';

const FilterName = (props) => {
    const handleSearch = (ev) => {
        props.inputSearch({
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

export default FilterName;
