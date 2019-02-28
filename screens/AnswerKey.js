import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';


import { Icon } from 'expo';

export default class AnswerKey extends React.Component {
  static navigationOptions = {

  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.flashcard}>
            <Text style={styles.text}>Ut porttitor lectus vehicula, mattis nulla vel, commodo nisi.</Text>
        </View>
        <View style={styles.answerKeyChoicesContainer}>
            <View style={styles.flipButton}>
                <Icon.Ionicons
                                name={'md-checkmark'}
                                size={50}
                                // style={{ marginBottom: -3 }}
                                // color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
                            />
            </View>
            <View style={styles.flipButton}>
                <Icon.Ionicons
                                name={'md-close'}
                                size={50}
                                // style={{ marginBottom: -3 }}
                                // color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
                            />
            </View>
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
  answerKeyChoicesContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
