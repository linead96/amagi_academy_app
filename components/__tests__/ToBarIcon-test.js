import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import ToBarIcon from '../TabBarIcon';


test('renders an icon based on the name of the icon passed as props into it, in this test md-checkmark is passed as props.', () => {
  const tree = renderer.create(<ToBarIcon focused name="md-checkmark" />).toJSON;
  expect(tree).toMatchSnapshot();
});
