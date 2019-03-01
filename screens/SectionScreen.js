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
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.View}>
          <Circle color={'#90F145'} onPressButton={()=>navigate('FlashCard')}/>
          <Circle color={'#2171D1'} onPressButton={()=>navigate('FlashCard')}/>
          <Circle color={'#CC003A'} onPressButton={()=>navigate('FlashCard')}/>
          <Circle color={'#67EE00'} onPressButton={()=>navigate('FlashCard')}/>
          <Circle color={'#4988D4'} onPressButton={()=>navigate('FlashCard')}/>
          <Circle color={'#F24576'} onPressButton={()=>navigate('FlashCard')}/>
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
