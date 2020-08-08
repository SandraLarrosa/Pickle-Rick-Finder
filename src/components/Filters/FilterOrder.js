import React from 'react';
import PropTypes from 'prop-types';

const FilterOrder = (props) => {
  const handleOrder = () => {
    props.orderCheck();
  };

  return (
    <>
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
    </>
  );
};

FilterOrder.propTypes = {
  orderCharacters: PropTypes.bool,
  orderCheck: PropTypes.func,
}

export default FilterOrder;
