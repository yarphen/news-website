import React from 'react';
import { create } from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../src/store';
import { Search } from '../../src/components';

describe('Search component', () => {
  test('it matches the snapshot', () => {
    const component = create(
      <Provider store={store}><MemoryRouter><Search /></MemoryRouter></Provider>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
