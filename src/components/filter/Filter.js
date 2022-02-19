import React from 'react';
import { FilterInput } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from '../../redux/filter/filter-actions';
import { filterSelector } from '../../redux/filter/filter-selectors';

const Filter = () => {
  const filter = useSelector(filterSelector);
  const dispatch = useDispatch();

  return (
    <>
      <h3>Find contacts by name</h3>
      <FilterInput
        type="text"
        value={filter}
        onChange={event => dispatch(filterContacts(event.currentTarget.value))}
        name="filter"
        title=""
        required
      />
    </>
  );
};

export default Filter;
