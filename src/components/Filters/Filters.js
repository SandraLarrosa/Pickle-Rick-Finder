import React from 'react';
import PropTypes from 'prop-types';
import FilterName from './FilterName';
import FilterOrder from './FilterOrder';
import '../../stylesheets/Filters/filters.scss';
import FilterStatus from './FilterStatus';

const Filters = (props) => {
  const evPrevent = (ev) => {
    ev.preventDefault();
  };
  return (
    <>
      <form className='form' onSubmit={evPrevent}>
        <div className='form__search'>
          <FilterName filters={props.handleFilters} value={props.value} />
        </div>
        <div className='form__order'>
          <FilterStatus filters={props.handleFilters} />
          <FilterOrder
            orderCheck={props.orderCheck}
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
