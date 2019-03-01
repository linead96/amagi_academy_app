import 'react-native';
import React from 'react';
import SectionCircle from '../SectionCircle';
import renderer from 'react-test-renderer';

test('renders touchablehighlight component which reflects the passed props color, in this test the color is red', () => {
    const tree = renderer.create(<SectionCircle color={'red'}/>).toJSON();
    expect(tree).toMatchSnapshot();
});