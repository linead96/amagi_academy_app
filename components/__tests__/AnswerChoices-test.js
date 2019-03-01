import 'react-native';
import React from 'react';
import AnswerChoices from '../AnswerChoices';
import renderer from 'react-test-renderer';

test('renders two view with icon when the flashcard component state flipped is true', () => {
    const tree = renderer.create(<AnswerChoices flipped={true}/>).toJSON();
    expect(tree).toMatchSnapshot();
});

test('renders null when the flashcard component state flipped is false', () => {
    const tree = renderer.create(<AnswerChoices flipped={false}/>).toJSON();
    expect(tree).toMatchSnapshot();
});