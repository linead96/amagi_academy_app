import 'react-native'
import React from 'react'
import ToBarIcon from '../TabBarIcon';
import renderer from 'react-test-renderer';

test('renders an icon based on the name of the icon passed as props into it, in this test md-checkmark is passed as props.', () => {
    const tree = renderer.create(<ToBarIcon name={'md-checkmark'}/>).toJSON;
    expect(tree).toMatchSnapshot();
})