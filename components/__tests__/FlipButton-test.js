import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import FlipButton from '../FlipButton';

describe('test FlipButton component', () => {
  test('renders correctly', () => {
    const tree = renderer.create(
      <FlipButton
        flip={jest.fn()}
        flipped={false}
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
