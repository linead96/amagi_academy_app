import React from 'react';
import { 
  View, 
  StyleSheet, 
} from 'react-native';
import Circle from '../components/SectionCircle';

export default class SectionScreen extends React.Component {
  static navigationOptions = {
    title: 'Sections',
  };

  render() {
    return (
      <View style={styles.View}>
          <Circle color={'#90F145'}/>
          <Circle color={'#2171D1'}/>
          <Circle color={'#CC003A'}/>
          <Circle color={'#67EE00'}/>
          <Circle color={'#4988D4'}/>
          <Circle color={'#F24576'}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  View: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
