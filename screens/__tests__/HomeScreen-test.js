import 'react-native';
import React from 'react';
import HomeScreen from '../HomeScreen';
import renderer from 'react-test-renderer';

test('renders flash card initial screen', () => {
    const tree =renderer.create(<HomeScreen/>).toJSON();
    expect(tree).toMatchSnapshot();
});