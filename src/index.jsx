import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import { store, history } from './store';
import {
  Home, News, Regions, Video, TV, NotFound,
} from './containers';
import { swInstall } from './sw-install';

import './css/app.css';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/news" exact component={News} />
        <Route path="/regions" exact component={Regions} />
        <Route path="/video" exact component={Video} />
        <Route path="/tv" exact component={TV} />
        <Route path="*" component={NotFound} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);

swInstall();
