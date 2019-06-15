import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class Search extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { searchText: '' };
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ searchText: event.target.value });
  }

  handleKeyDown(event) {
    const { history, location } = this.props;
    const { searchText } = this.state;
    if (event.keyCode === 13) {
      history.push(`${location.pathname}?q=${encodeURIComponent(searchText)}`);
    }
  }

  render() {
    const { searchText } = this.state;
    return (
      <div className="search">
        <input className="search-input" type="text" placeholder="Search" onKeyDown={this.handleKeyDown} onChange={this.handleChange} value={searchText} />
        <div className="search-input-icon fas fa-search" />
      </div>
    );
  }
}

Search.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

const SearchWrapped = withRouter(Search);

export { SearchWrapped as Search };
