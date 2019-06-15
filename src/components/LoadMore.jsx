/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

export const LoadMore = ({ onLoadMore }) => (
  <div className="load-more">
    <div className="load-more-btn" onClick={onLoadMore}>Load More</div>
  </div>
);


LoadMore.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
