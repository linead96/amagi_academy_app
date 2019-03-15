import 'react-native';
import React from 'react';
import FlashCardScreen from '../FlashCardScreen';
import renderer from 'react-test-renderer';

describe('test flashcardscreen functions and interface', () => {

    test('renders flash card initial screen', () => {
        const tree =renderer.create(<FlashCardScreen/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('should change "flipped" state', () => {
        let flashCardComponent = renderer.create(<FlashCardScreen/>).getInstance();
        let originalFlip = flashCardComponent.state.flipped;
        flashCardComponent.flippedIt();
        expect(flashCardComponent.state.flipped).toEqual(!originalFlip);
    });

    test('return a random hex code', () => {
        let flashCardComponent = renderer.create(<FlashCardScreen />).getInstance();
        bg = flashCardComponent.generateRandomHexCode();
        expect(bg).toEqual(expect.stringContaining('#'))
    });
});
