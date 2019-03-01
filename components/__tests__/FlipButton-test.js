import 'react-native';
import React from 'react';
import FlipButton from '../FlipButton';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<FlipButton flipped={false}/>).toJSON();
    expect(tree).toMatchSnapshot();
});