import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import SectionCircle from '../SectionCircle';

test('renders touchablehighlight component which reflects the passed props color, in this test the color is red', () => {
  const tree = renderer.create(
    <SectionCircle
      onPressButton={jest.fn()}
      color="red"
    />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
