import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

export default class FlashCard extends React.Component {
  static navigationOptions = {

  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.flashcard}>
            <Text style={styles.text}>Ut porttitor lectus vehicula, mattis nulla vel, commodo nisi.</Text>
        </View>
        <View style={styles.flipButton}>
            <Text style={styles.flipButton__text}>Flip</Text>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  flashcard: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#90F145', 
    width: '80%',
    height: '60%',
    borderRadius: 10,
    marginTop: '20%',    
    marginBottom: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
    margin: '10%',
  },   
  flipButton: {
    backgroundColor: 'yellow',  
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginBottom: '5%',
  },
  flipButton__text: {
    textAlign: 'center',
    fontSize: 30,
    margin: '10%',
  },
});
