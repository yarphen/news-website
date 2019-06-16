import React from 'react';
import { create } from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../src/store';
import { HighlightedLink } from '../../src/components';

describe('HighlightedLink component', () => {
  test('it matches the snapshot', () => {
    const component = create(
      <Provider store={store}><MemoryRouter><HighlightedLink /></MemoryRouter></Provider>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
