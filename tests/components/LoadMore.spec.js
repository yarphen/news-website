import React from 'react';
import { create } from 'react-test-renderer';
import { LoadMore } from '../../src/components';

describe('LoadMore component', () => {
  test('it matches the snapshot', () => {
    const component = create(<LoadMore onLoadMore={() => {}} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
