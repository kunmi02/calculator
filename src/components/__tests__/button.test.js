import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../button';

it('renders correctly', () => {
  const isWide = '25%';
  const styles = {
    width: '25%',
    background: 'orange',
    height: '100%',
    font: "3rem 'Syne Mono'",
    textAlign: 'center',
  };
  const tree = renderer
    .create(<Button name="0" key="0" style={styles}  clickHandler={() => {}}  wide={isWide} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
