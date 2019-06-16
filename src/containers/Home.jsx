import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { contentActions } from '../actions';
import {
  selectorContentItems, selectorContentLoading, selectorContentError, selectorContentHasMore,
} from '../selectors';
import { Layout } from './Layout';
import { ContentItem, LoadMore } from '../components';
import { ClearFilters } from '../components/ClearFilters';
import { qFromProps } from '../util';

const ITEMS_PER_PAGE = 6;

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { limit: ITEMS_PER_PAGE, offset: 0 };
    this.handleLoadMore = this.handleLoadMore.bind(this);
    this.handleClearFilters = this.handleClearFilters.bind(this);
  }

  componentDidMount() {
    const { actions, tag } = this.props;
    const { limit, offset } = this.state;
    actions.content.clearItems();
    actions.content.fetchItems({
      q: qFromProps(this.props), tag, limit, offset,
    });
  }

  componentDidUpdate(prevProps) {
    const { actions, tag } = this.props;
    const q = qFromProps(this.props);
    const oldQ = qFromProps(prevProps);
    if (q !== oldQ) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ limit: ITEMS_PER_PAGE, offset: 0 }, () => {
        actions.content.clearItems();
        actions.content.fetchItems({
          q, tag, limit: ITEMS_PER_PAGE, offset: 0,
        });
      });
    }
  }

  handleLoadMore() {
    const { actions, tag } = this.props;
    const { limit, offset } = this.state;
    const newOffset = offset + ITEMS_PER_PAGE;
    this.setState({ limit, offset: newOffset }, () => {
      actions.content.fetchItems({
        q: qFromProps(this.props), tag, limit, offset: newOffset,
      });
    });
  }

  handleClearFilters() {
    const { actions, tag, history } = this.props;
    this.setState({ limit: ITEMS_PER_PAGE, offset: 0 }, () => {
      actions.content.clearItems();
      const q = qFromProps(this.props);
      if (!q && !tag) {
        actions.content.fetchItems({
          q: '', tag: null, limit: ITEMS_PER_PAGE, offset: 0,
        });
      }
      history.push('/');
    });
  }

  render() {
    const {
      items, loading, error, hasMore, title,
    } = this.props;
    return (
      <Layout title={title}>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <div className="content-wrapper">
          {!!items.length && (
            <div className="content">
              {items.map(item => <ContentItem {...item} key={item.id} />)}
            </div>
          )}
          {!loading && !!error && <p className="errorbox">{error}</p>}
          {!loading && !error && !items.length && (
            <p className="infobox">Nothing found.</p>
          )}
          {!loading && !error && hasMore && <LoadMore onLoadMore={this.handleLoadMore} />}
          {!loading && !error && !hasMore && <ClearFilters onClearFilters={this.handleClearFilters} />}
          {loading && <p className="infobox">Loading...</p>}
        </div>
      </Layout>
    );
  }
}

Home.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  actions: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  tag: PropTypes.string,
  loading: PropTypes.bool,
  hasMore: PropTypes.bool,
  error: PropTypes.string,
  title: PropTypes.string,
};

Home.defaultProps = {
  items: [],
  tag: null,
  loading: false,
  error: null,
  hasMore: true,
  title: 'Home',
};

const mapStateToProps = createSelector(
  [selectorContentItems, selectorContentLoading, selectorContentHasMore, selectorContentError],
  (items, loading, hasMore, error) => ({
    items, loading, hasMore, error,
  }),
);

const mapDispatchToProps = dispatch => ({
  actions: {
    content: bindActionCreators(contentActions, dispatch),
  },
});

const HomeWrapped = connect(mapStateToProps, mapDispatchToProps)(Home);

export { HomeWrapped as Home };
