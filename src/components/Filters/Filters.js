import React from 'react';
import PropTypes from 'prop-types';
import FilterName from './FilterName';
import FilterOrder from './FilterOrder';
import '../../stylesheets/Filters/filters.scss';


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

Filters.propTypes = {
  value: PropTypes.string,
  inputSearch: PropTypes.func,
  orderCharacters: PropTypes.bool,
  orderCheck: PropTypes.func,
};

export default Filters;
