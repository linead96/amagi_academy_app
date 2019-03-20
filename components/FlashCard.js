import React from 'react';
import {
  Text,
  StyleSheet,
  Animated,
  Easing,
} from 'react-native';
import PropTypes from 'prop-types';

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
    color: 'white',
  },
  flashcardAnswerText: {
    textAlign: 'center',
    fontSize: 30,
    margin: '10%',
    color: 'white',
  },
});

class FlashCard extends React.Component {
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0);
  }

  componentDidUpdate(prevProps) {
    const { flipped } = this.props;
    if (flipped !== prevProps.flipped) {
      this.animate();
    }
  }

  animate() {
    this.animatedValue.setValue(0);
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 250,
        easing: Easing.linear,
      },
    ).start();
  }

  stopAnimate() {
    Animated.timing(this.animatedValue, {
      toValue: 0,
      duration: 0,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }


  render() {
    const {
      flipped,
      bg,
      question,
      answer,
    } = this.props;

    const rotateX = this.animatedValue.interpolate({
      inputRange: [0, 0.99, 1],
      outputRange: ['0deg', '180deg', '0deg'],
    });

    return flipped
      ? (
        <Animated.View style={{
          ...styles.flashcardAnswer,
          backgroundColor: bg,
          transform: [{ rotateX }],
        }}
        >
          <Text style={styles.flashcardAnswerText}>
            {`Answer:\n${answer}`}
          </Text>
        </Animated.View>
      )
      : (
        <Animated.View style={{
          ...styles.flashcardQuestion,
          backgroundColor: bg,
          transform: [{ rotateX }],
        }}
        >
          <Text style={styles.flashcardQuestionText}>
            {`Question:\n${question}`}
          </Text>
        </Animated.View>
      );
  }
}

FlashCard.propTypes = {
  flipped: PropTypes.bool.isRequired,
  bg: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default FlashCard;
