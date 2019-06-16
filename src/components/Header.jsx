/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { HighlightedLink as Link } from './HighlightedLink';
import { Search } from './Search';

class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.handleOpenSidebar = this.handleOpenSidebar.bind(this);
  }

  handleOpenSidebar() {
    const { onOpenSidebar } = this.props;
    onOpenSidebar();
  }

  render() {
    const { title } = this.props;
    const normalLink = { className: 'nav-menu-item' };
    const activeLink = { className: 'nav-menu-item nav-menu-item-active' };
    return (
      <div className="header-wrapper">
        <Link to="/"><div className="big-header-logo fas fa-registered" /></Link>
        <div className="mobile-header">
          <div className="header-title">{title}</div>
          <Link to="/"><div className="header-logo fas fa-registered" /></Link>
          <div className="header-sandwich fas fa-bars" onClick={this.handleOpenSidebar} />
        </div>
        <div className="nav-menu">
          <Link to="/news" ifMatches={activeLink} ifDoesNotMatch={normalLink}>News</Link>
          <Link to="/regions" ifMatches={activeLink} ifDoesNotMatch={normalLink}>Regions</Link>
          <Link to="/video" ifMatches={activeLink} ifDoesNotMatch={normalLink}>Video</Link>
          <Link to="/tv" ifMatches={activeLink} ifDoesNotMatch={normalLink}>TV</Link>
          <Search />
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  onOpenSidebar: PropTypes.func,
  title: PropTypes.string.isRequired,
};

Header.defaultProps = {
  onOpenSidebar: () => {},
};

export { Header };
