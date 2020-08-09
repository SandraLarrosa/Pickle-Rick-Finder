import React from 'react';
import PropTypes from 'prop-types';
import '../../stylesheets/Filters/filterStatus.scss';

const FilterStatus = (props) => {
  const handleSearch = (ev) => {
    props.handleFilters({
      value: ev.currentTarget.value,
      key: 'status',
    });
  };
  return (
    <>
      <label className='containStatus__label' htmlFor='searchStatus'>
        Status:
        <select
          className='containStatus__select'
          name='status'
          id='status'
          onChange={handleSearch}
        >
          <option value='All'>All</option>
          <option value='Alive'>Alive</option>
          <option value='Dead'>Dead</option>
          <option value='Unknown'>Unknown</option>
        </select>
      </label>
    </>
  );
};

FilterStatus.propTypes = {
  filters: PropTypes.func,
};

export default FilterStatus;
