import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import AnswerChoices from '../AnswerChoices';

test('renders two view with icon when the flashcard component state flipped is true', () => {
  const tree = renderer.create(<AnswerChoices flipped />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders null when the flashcard component state flipped is false', () => {
  const tree = renderer.create(<AnswerChoices flipped={false} />).toJSON();
  expect(tree).toMatchSnapshot();
});
