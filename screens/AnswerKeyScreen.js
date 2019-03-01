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
        <View style={styles.answerKey}>
            <Text style={styles.answerKey__text}>Ut porttitor lectus vehicula, mattis nulla vel, commodo nisi.</Text>
        </View>
        <View style={styles.answerKeyChoicesContainer}>
            <View style={styles.answerKeyChoicesCorrect}>
                <Icon.Ionicons
                                name={'md-checkmark'}
                                size={50}
                                color={'white'}
                                // style={{ marginBottom: -3 }}
                                // color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
                            />
            </View>
            <View style={styles.answerKeyChoicesWrong}>
                <Icon.Ionicons
                                name={'md-close'}
                                size={50}
                                color={'white'}
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
  answerKey: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D183F9', 
    width: '80%',
    height: '60%',
    borderRadius: 10,
    marginTop: '10%',    
    marginBottom: 10,
  },
  answerKey__text: {
    textAlign: 'center',
    fontSize: 30,
    margin: '10%',
    color: 'white',
  },   
  answerKeyChoicesContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  answerKeyChoicesCorrect: {
    backgroundColor: '#89E171',  
    flex: 1,
    margin: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginBottom: '5%',
  },
  answerKeyChoicesWrong: {
    backgroundColor: '#F55241',  
    flex: 1,
    margin: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginBottom: '5%',
  },
});
