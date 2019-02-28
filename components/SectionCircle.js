import React from 'react';
import {View} from 'react-native'

export default class SectionCircle extends React.Component {
  render() {
    return (
        <View
        style={{ 
            backgroundColor: this.props.color, 
            width: 90,
            height: 90,
            borderRadius: 45,
            margin: 30,    
        }}
        />
    );
  }
}