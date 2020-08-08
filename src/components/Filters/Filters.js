import React from 'react';
import '../../stylesheets/Filters/filters.scss';
import FilterName from './FilterName';

const Filters = (props) => {
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
          <FilterName inputSearch={props.inputSearch} value={props.value}/>
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
