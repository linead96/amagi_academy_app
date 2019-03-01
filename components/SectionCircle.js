import React from 'react';
import {
  View,
  TouchableHighlight,
  } from 'react-native'

const SectionCircle = (props) => {
  return (
    <TouchableHighlight onPress={props.onPressButton}>
    <View
   style={{ 
       backgroundColor: props.color, 
       width: 90,
       height: 90,
       borderRadius: 45,
       margin: 30,    
   }}
   />
  </TouchableHighlight>
  )
}

export default SectionCircle;