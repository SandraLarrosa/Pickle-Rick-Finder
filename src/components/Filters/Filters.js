import React from 'react';
import '../../stylesheets/Filters/filters.scss';
import FilterName from './FilterName';
import FilterOrder from './FilterOrder';

const Filters = (props) => {
  const evPrevent = (ev) => {
    ev.preventDefault();
  };
  return (
    <>
      <div className='form__search'>
        <form onSubmit={evPrevent}>
          <FilterName inputSearch={props.inputSearch} value={props.value} />
          <FilterOrder
            orderCheck={props.orderCheck}
            orderCharacters={props.orderCharacters}
          />
        </form>
      </div>
    </>
  );
};

export default Filters;
