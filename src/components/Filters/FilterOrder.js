import React from 'react';

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

export default FilterOrder;
