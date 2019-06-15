/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC';
import MediaQuery from 'react-responsive';

import { formatDate } from '../util/format';

const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis);

export const ContentItem = (props) => {
  const {
    title, text, image, updated,
  } = props;
  return (
    <div className="content-item">
      <div className="content-item-desktop-title"><a href="#">{title}</a></div>
      <div className="content-item-image" style={{ backgroundImage: `url(${image})` }} />
      <div className="content-item-article">
        <div className="content-item-mobile-title"><a href="#">{title}</a></div>
        <div className="content-item-text">
          <MediaQuery query="(min-width: 768px)">
            {isDesktop => (
              <ResponsiveEllipsis
                text={text}
                maxLine={isDesktop ? 10 : 5}
                ellipsis="..."
                trimRight
                basedOn="letters"
              />
            )}
          </MediaQuery>
        </div>
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
