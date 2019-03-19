import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import FlashCardScreen from '../FlashCardScreen';

describe('test flashcardscreen functions and interface', () => {
  test('renders flash card initial screen', () => {
    const tree = renderer.create(<FlashCardScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should change "flipped" state', () => {
    const flashCardComponent = renderer.create(<FlashCardScreen />).getInstance();
    const originalFlip = flashCardComponent.state.flipped;
    flashCardComponent.flippedIt();
    expect(flashCardComponent.state.flipped).toEqual(!originalFlip);
  });

  test('return a random hex code', () => {
    const flashCardComponent = renderer.create(<FlashCardScreen />).getInstance();
    const bg = flashCardComponent.generateRandomHexCode();
    expect(bg).toEqual(expect.stringContaining('#'));
  });
});
