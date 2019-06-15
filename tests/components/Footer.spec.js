import React from 'react';
import { create } from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../src/store';
import { Footer } from '../../src/components';

describe('Footer component', () => {
  test('it matches the snapshot', () => {
    const component = create(
      <Provider store={store}><MemoryRouter><Footer /></MemoryRouter></Provider>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
