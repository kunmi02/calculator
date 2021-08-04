import React from 'react';
import renderer from 'react-test-renderer';
import Display from '../display';

it('renders correctly', () => {
  const tree = renderer
    .create(<Display />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});