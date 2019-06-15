import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { create } from 'react-test-renderer';
import { Header } from '../../src/components';

describe('Header component', () => {
  test('it matches the snapshot', () => {
    const component = create(<MemoryRouter><Header /></MemoryRouter>);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
