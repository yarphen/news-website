import React, { PureComponent } from 'react';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class HighlightedLink extends PureComponent {
  render() {
    // eslint-disable-next-line object-curly-newline
    const { to, location, children, ifMatches, ifDoesNotMatch, staticContext, match, history, ...rest } = this.props;
    const { pathname } = location;
    const matches = pathname === to;
    const props = Object.assign({}, rest, matches ? { ...ifMatches } : { ...ifDoesNotMatch }, { to });
    return (
      <Link {...props}>
        {children}
      </Link>
    );
  }
}

HighlightedLink.propTypes = {
  location: PropTypes.object.isRequired,
  children: PropTypes.any,
  to: PropTypes.string.isRequired,
  ifMatches: PropTypes.object,
  ifDoesNotMatch: PropTypes.object,
  staticContext: PropTypes.any,
  match: PropTypes.any,
  history: PropTypes.any,
};

HighlightedLink.defaultProps = {
  ifMatches: null,
  ifDoesNotMatch: null,
  children: null,
  staticContext: null,
  match: null,
  history: null,
};

const HighlightedLinkWrapped = withRouter(HighlightedLink);

export { HighlightedLinkWrapped as HighlightedLink };
