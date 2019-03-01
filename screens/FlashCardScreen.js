import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import FlipButton from '../components/FlipButton';
import FlashCard from '../components/FlashCard';
import AnswerChoices from '../components/AnswerChoices';

export default class FlashCardScreen extends React.Component {
  state = {
    flipped: false,
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
        <FlashCard flipped = {this.state.flipped}/>
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
