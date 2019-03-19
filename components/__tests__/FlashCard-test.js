import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import FlashCard from '../FlashCard';


describe('test flashcardComponent', () => {
  test('renders a view with a question when the state flipped is false', () => {
    const tree = renderer.create(
      <FlashCard
        bg="#FFFFFF"
        flipped={false}
        question="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        answer="Lorem ipsum dolor sit amet."
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders a view with an answer when the state flipped is true', () => {
    const tree = renderer.create(
      <FlashCard
        bg="#FFFFFF"
        flipped
        question="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        answer="Lorem ipsum dolor sit amet."
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
