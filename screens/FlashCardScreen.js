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
  constructor(props){
    super(props)
    this.state={
      preGestureMove: 0,
      gestureMove: 0,
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

    this._panResponder = PanResponder.create(
      {
        onStartShouldSetPanResponder:(evt, gestureState) => true,
        onPanResponderMove:(evt,gestureState) => {
          this.setState({preGestureMove: this.state.gestureMove})
          this.setState({gestureMove:gestureState.moveX})

          let actionValue = (this.state.gestureMove - this.state.preGestureMove);

          if(
            (actionValue > 100) 
            &&
            this.state.current < this.state.flashCardContent.length-1
            ){
              this.setState(previousState => (
                {
                  current: previousState.current+1,
                }
              ))
              if(this.state.flipped === true){
                this.setState(previousState => (
                  {
                    flipped: !previousState.flipped
                  }
                ))
              }
          }else if(
            (actionValue < -100)
            &&
            this.state.current > 0 
          ){
            this.setState(previousState => (
              {
                current: previousState.current-1,
              }
            ))
            if(this.state.flipped === true){
              this.setState(previousState => (
                {
                  flipped: !previousState.flipped
                }
              ))
            }
          }
        }
      }
    )
    
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
        <View
        style = {styles.flashcard} 
        {...this._panResponder.panHandlers} >
          <FlashCard flipped = {this.state.flipped}
              question = {this.state.flashCardContent[this.state.current].question}
              answer = {this.state.flashCardContent[this.state.current].answer}/>
        </View>
        <View style = {styles.buttons}>
          <FlipButton flip = {this.flippedIt}/>
          <AnswerChoices flipped = {this.state.flipped}/>  
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
    flex: 6
  },
  buttons: {
    flex: 2,
  }
});