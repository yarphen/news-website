import React from 'react';
import { create } from 'react-test-renderer';
import { ClearFilters } from '../../src/components';

describe('ClearFilters component', () => {
  test('it matches the snapshot', () => {
    const component = create(<ClearFilters onClearFilters={() => {}} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
