/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';

import { formatDate } from '../util/format';

export const ContentItem = (props) => {
  const {
    title, text, image, updated,
  } = props;
  return (
    <div className="content-item">
      <div className="content-item-desktop-title"><a href="#">{title}</a></div>
      <div className="content-item-image"><a href="#"><img src={image} /></a></div>
      <div className="content-item-article">
        <div className="content-item-mobile-title"><a href="#">{title}</a></div>
        <div className="content-item-text">{text}</div>
        <div className="content-item-updated">
          <span>Updated: </span>
          <span>{formatDate(updated)}</span>
        </div>
      </div>
    </div>
  );
};

ContentItem.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  updated: PropTypes.object.isRequired,
};
