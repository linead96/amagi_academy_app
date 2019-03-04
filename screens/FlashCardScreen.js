import React from 'react';
import {
  StyleSheet,
  View,
  PanResponder,
} from 'react-native';
import FlipButton from '../components/FlipButton';
import FlashCard from '../components/FlashCard';
import AnswerChoices from '../components/AnswerChoices';

export default class FlashCardScreen extends React.Component {
  state = {
    flipped: false,
    flashCardContent: [
      {
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        answer: 'Lorem ipsum dolor sit amet.'
      },
      {
        question:  'Donec bibendum velit lorem, ac commodo lacus convallis a.',
        answer:  'Donec bibendum velit lorem.'
      },
      {
        question: 'Integer eu malesuada mi, a lobortis massa.',
        answer: 'Integer eu malesuada mi.'
      },
    ],
    current: 0,
  }

  flippedIt = () => {
    this.setState(previousState => (
      {
        flipped: !previousState.flipped
      }
    ))
  }
  

  render() {
    return (
      <View style={styles.container}>
        <FlashCard flipped = {this.state.flipped}
          question = {this.state.flashCardContent[this.state.current].question}
          answer = {this.state.flashCardContent[this.state.current].answer}/>
        <FlipButton flip = {this.flippedIt}/>
        <AnswerChoices flipped = {this.state.flipped}/>    
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
});