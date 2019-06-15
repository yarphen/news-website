import React from 'react';
import { create } from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../src/store';
import { Sidebar } from '../../src/components';

describe('Sidebar component', () => {
  test('it matches the snapshot', () => {
    const component = create(
      <Provider store={store}><MemoryRouter><Sidebar /></MemoryRouter></Provider>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
