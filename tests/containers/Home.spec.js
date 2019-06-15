import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { create } from 'react-test-renderer';
import { Home } from '../../src/containers';
import { store, history } from '../../src/store';

describe('Home container', () => {
  test('it matches the snapshot', () => {
    const container = create(
      <Provider store={store}><MemoryRouter><Home history={history} /></MemoryRouter></Provider>,
    );
    expect(container.toJSON()).toMatchSnapshot();
  });
});
