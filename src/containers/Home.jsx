import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import PropTypes from 'prop-types';

import { pingActions } from '../actions';
import {
  selectorResult, selectorLoading, selectorInitial, selectorError,
} from '../selectors';
import { Layout } from './Layout';
import { ContentItem, LoadMore } from '../components';

class Home extends PureComponent {
  render() {
    // const { items } = this.props;
    const items = Array.from({ length: 6 }).map((item, index) => ({
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea.`,
      title: 'Title',
      image: '',
      updated: new Date(),
      id: index,
    }));
    return (
      <Layout>
        {items.length && (
          <div className="content">
            {items.map(item => <ContentItem {...item} key={item.id} />)}
          </div>
        )}
        {items.length && <LoadMore />}
      </Layout>
    );
  }
}

Home.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

Home.defaultProps = {
  items: [],
};

const mapStateToProps = createSelector(
  [selectorResult, selectorLoading, selectorInitial, selectorError],
  (result, loading, initial, error) => ({
    result, loading, initial, error,
  }),
);

const mapDispatchToProps = dispatch => ({
  actions: {
    ping: bindActionCreators(pingActions, dispatch),
  },
});

const HomeWrapped = connect(mapStateToProps, mapDispatchToProps)(Home);

export { HomeWrapped as Home };
