import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { create } from 'react-test-renderer';
import { Layout } from '../../src/containers';
import { store } from '../../src/store';

describe('Layout container', () => {
  test('it matches the snapshot', () => {
    const container = create(
      <Provider store={store}><MemoryRouter><Layout /></MemoryRouter></Provider>,
    );
    expect(container.toJSON()).toMatchSnapshot();
  });
});
