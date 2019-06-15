/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

export const ClearFilters = ({ onClearFilters }) => (
  <div className="clear-filters">
    <div className="clear-filters-btn" onClick={onClearFilters}>Clear Filters</div>
  </div>
);


ClearFilters.propTypes = {
  onClearFilters: PropTypes.func.isRequired,
};
