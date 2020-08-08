import React from 'react';
import '../../stylesheets/filters.scss';

const Filters = (props) => {
  const handleSearch = (ev) => {
    props.inputSearch({
      value: ev.currentTarget.value,
      key: 'name',
    });
  };

  const handleOrder = () => {
    props.orderCheck();
  };
  const evPrevent = (ev) => {
    ev.preventDefault();
  };

  return (
    <>
      <div className='form__search'>
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
          <label className='label__check' htmlFor='order'>
            <input
              className='checkOrder'
              type='checkbox'
              id='order'
              name='order'
              value='order'
              onChange={handleOrder}
              checked={props.orderCharacters}
            ></input>
            Order A-Z
          </label>
        </form>
      </div>
    </>
  );
};

export default Filters;
