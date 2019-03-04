import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  } from 'react-native'

const FlashCard = (props) => {
  return props.flipped ? 
  (<View style={styles.flashcardAnswer}>
  <Text style={styles.flashcardAnswerText}> {props.answer} </Text>
  </View>) 
  : 
  (<View style={styles.flashcardQuestion}>
  <Text style={styles.flashcardQuestionText}> {props.question} </Text>
  </View>)
}

const styles = StyleSheet.create({
    flashcardQuestion: {
        flex: 6,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#265AD3', 
        width: '80%',
        height: '60%',
        borderRadius: 10,
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
        borderRadius: 10,
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
      },   
});

export default FlashCard;