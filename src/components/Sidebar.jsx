import React, { PureComponent } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import enhanceWithClickOutside from 'react-click-outside';
import { HighlightedLink as Link } from './HighlightedLink';

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
    const normalLink = { className: 'sidebar-item' };
    const activeLink = { className: 'sidebar-item sidebar-item-active' };
    return (
      <div className={classnames('sidebar', { 'sidebar-hidden': !isOpen })}>
        <div className="sidebar-inset">
          <Link to="/news" ifMatches={activeLink} ifDoesNotMatch={normalLink}>News</Link>
          <Link to="/regions" ifMatches={activeLink} ifDoesNotMatch={normalLink}>Regions</Link>
          <Link to="/video" ifMatches={activeLink} ifDoesNotMatch={normalLink}>Video</Link>
          <Link to="/tv" ifMatches={activeLink} ifDoesNotMatch={normalLink}>TV</Link>
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
