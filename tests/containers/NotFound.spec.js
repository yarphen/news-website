import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { create } from 'react-test-renderer';
import { NotFound } from '../../src/containers';
import { store } from '../../src/store';

describe('NotFound container', () => {
  test('it matches the snapshot', () => {
    const container = create(
      <Provider store={store}><MemoryRouter><NotFound /></MemoryRouter></Provider>,
    );
    expect(container.toJSON()).toMatchSnapshot();
  });
});
