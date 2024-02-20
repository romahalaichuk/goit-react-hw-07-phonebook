import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilterValue } from '../../redux/phonebookSlice';
import styles from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(setFilterValue(e.target.value.trim().toLowerCase()));
  };

  return (
    <div className={styles.filterContainer}>
      <label htmlFor="filter">Filter contacts:</label>
      <input
        type="text"
        id="filter"
        onChange={handleFilterChange}
        className={styles.filterInput}
        placeholder="Search by name or number"
      />
    </div>
  );
};

export default Filter;
