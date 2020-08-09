import React from 'react';
import PropTypes from 'prop-types';
import FilterName from './FilterName';
import FilterOrder from './FilterOrder';
import FilterStatus from './FilterStatus';
import '../../stylesheets/Filters/filters.scss';

const Filters = (props) => {
  const evPrevent = (ev) => {
    ev.preventDefault();
  };
  return (
    <>
      <form className='form' onSubmit={evPrevent}>
        <div className='form__search'>
          <FilterName handleFilters={props.handleFilters} value={props.value} />
        </div>
        <div className='form__order'>
          <FilterStatus handleFilters={props.handleFilters} />
          <FilterOrder
            handleOrder={props.handleOrder}
            orderCharacters={props.orderCharacters}
          />
        </div>
      </form>
    </>
  );
};

Filters.propTypes = {
  value: PropTypes.string,
  inputSearch: PropTypes.func,
  orderCharacters: PropTypes.bool,
  orderCheck: PropTypes.func,
};

export default Filters;
