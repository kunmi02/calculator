import React from 'react';
import renderer from 'react-test-renderer';
import ButtonPanel from '../buttonPanel';

it('renders correctly', () => {
  const tree = renderer
    .create(<ButtonPanel clickHandler={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});