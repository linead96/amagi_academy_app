import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import HomeScreen from '../HomeScreen';


test('renders flash card initial screen', () => {
  const tree = renderer.create(<HomeScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
