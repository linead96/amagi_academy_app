import 'react-native';
import React from 'react';
import SectionScreen from '../SectionScreen';
import renderer from 'react-test-renderer';

describe('test SectionScreen functions and interface', () => {
    test('renders flash card initial screen', () => {
        const tree =renderer.create(<SectionScreen 
            navigation={{
                navigate: jest.fn(),
            }
        }/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
