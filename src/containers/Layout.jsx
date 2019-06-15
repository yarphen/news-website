import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Sidebar, Header, Footer } from '../components';

class Layout extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { sidebarOpen: false };
    this.handleCloseSidebar = this.handleCloseSidebar.bind(this);
    this.handleOpenSidebar = this.handleOpenSidebar.bind(this);
  }

  handleCloseSidebar() {
    this.setState({ sidebarOpen: false });
  }

  handleOpenSidebar() {
    this.setState({ sidebarOpen: true });
  }

  render() {
    const { children } = this.props;
    const { sidebarOpen } = this.state;
    return (
      <div className="container">
        <Sidebar isOpen={sidebarOpen} onClose={this.handleCloseSidebar} />
        <Header onOpenSidebar={this.handleOpenSidebar} />
        {children}
        <Footer />
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.object,
};

Layout.defaultProps = {
  children: null,
};

export { Layout };