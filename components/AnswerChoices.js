import React from 'react';
import {
  View,
  TouchableNativeFeedback,
  StyleSheet,
  } from 'react-native'
import { Icon } from 'expo';

const AnswerChoices = (props) => {
  return props.flipped ? 
    (<TouchableNativeFeedback>
        <View style={styles.answerKeyChoicesContainer}>
          <View style={styles.answerKeyChoicesCorrect}>
              <Icon.Ionicons
                name={'md-checkmark'}
                size={50}
                color={'white'}
              />
          </View>
          <View style={styles.answerKeyChoicesWrong}>
              <Icon.Ionicons
                name={'md-close'}
                size={50}
                color={'white'}
              />
          </View>
        </View>
     </TouchableNativeFeedback>
    ):null
}

const styles = StyleSheet.create({
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

export default AnswerChoices;