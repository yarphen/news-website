/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
    return (
      <div className="header-wrapper">
        <Link to="/"><div className="big-header-logo fas fa-registered" /></Link>
        <div className="mobile-header">
          <div className="header-title">News</div>
          <Link to="/"><div className="header-logo fas fa-registered" /></Link>
          <div className="header-sandwich fas fa-bars" onClick={this.handleOpenSidebar} />
        </div>
        <div className="nav-menu">
          <div className="nav-menu-item"><Link to="/news">News</Link></div>
          <div className="nav-menu-item"><Link to="/regions">Regions</Link></div>
          <div className="nav-menu-item"><Link to="/video">Video</Link></div>
          <div className="nav-menu-item"><Link to="/tv">TV</Link></div>
          <Search />
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  onOpenSidebar: PropTypes.func,
};

Header.defaultProps = {
  onOpenSidebar: () => {},
};

export { Header };
