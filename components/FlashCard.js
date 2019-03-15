import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  } from 'react-native'

const FlashCard = (props) => {
  return props.flipped ? 
  (<View style={{ ...styles.flashcardAnswer, backgroundColor: props.bg}}>
  <Text style={styles.flashcardAnswerText}> {`Answer:\n${props.answer}`} </Text>
  </View>) 
  : 
  (<View style={{ ...styles.flashcardQuestion, backgroundColor: props.bg}}>
  <Text style={styles.flashcardQuestionText}> {`Question:\n${props.question}`} </Text>
  </View>)
}

const styles = StyleSheet.create({
    flashcardQuestion: {
        flex: 6,
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        height: '60%',
        borderRadius: 30,
        marginTop: '10%',    
        marginBottom: 10,
      },
      flashcardAnswer: {
        flex: 6,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#11CACA', 
        width: '80%',
        height: '60%',
        borderRadius: 30,
        marginTop: '10%',    
        marginBottom: 10,
      },
      flashcardQuestionText: {
        textAlign: 'center',
        fontSize: 30,
        margin: '10%',
        color: 'white'
      },
      flashcardAnswerText: {
        textAlign: 'center',
        fontSize: 30,
        margin: '10%',
        color: 'white'
      },   
});

export default FlashCard;