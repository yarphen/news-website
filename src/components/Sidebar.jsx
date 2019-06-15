import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import enhanceWithClickOutside from 'react-click-outside';

class Sidebar extends PureComponent {
  constructor(props) {
    super(props);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleClickOutside() {
    const { onClose } = this.props;
    onClose();
  }

  render() {
    const { isOpen } = this.props;
    return (
      <div className={classnames('sidebar', { 'sidebar-hidden': !isOpen })}>
        <div className="sidebar-inset">
          <Link className="sidebar-item" to="/news">News</Link>
          <Link className="sidebar-item" to="/regions">Regions</Link>
          <Link className="sidebar-item" to="/video">Video</Link>
          <Link className="sidebar-item" to="/tv">TV</Link>
          <span className="sidebar-footer-item">Copyright &copy; yarphen</span>
        </div>
      </div>
    );
  }
}


Sidebar.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

Sidebar.defaultProps = {
  isOpen: false,
  onClose: () => {},
};

const SidebarWrapped = enhanceWithClickOutside(Sidebar);

export { SidebarWrapped as Sidebar };
