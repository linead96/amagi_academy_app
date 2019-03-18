import React from 'react';
import {
  View,
  Text,
  StyleSheet,
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

const FlashCard = (props) => {
  const {
    flipped,
    bg,
    question,
    answer,
  } = props;
  return flipped
    ? (
      <View style={{ ...styles.flashcardAnswer, backgroundColor: bg }}>
        <Text style={styles.flashcardAnswerText}>
          {`Answer:\n${answer}`}
        </Text>
      </View>
    )
    : (
      <View style={{ ...styles.flashcardQuestion, backgroundColor: bg }}>
        <Text style={styles.flashcardQuestionText}>
          {`Question:\n${question}`}
        </Text>
      </View>
    );
};

FlashCard.propTypes = {
  flipped: PropTypes.bool.isRequired,
  bg: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default FlashCard;
