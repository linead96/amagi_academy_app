import React from 'react';
import {
  View,
  TouchableNativeFeedback,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import { Icon } from 'expo';

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
  },
  answerKeyChoicesWrong: {
    backgroundColor: '#F55241',
    flex: 1,
    margin: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
});

const AnswerChoices = (props) => {
  const { flipped } = props;
  return flipped
    ? (
      <View style={styles.answerKeyChoicesContainer}>
        <TouchableNativeFeedback>
          <View style={styles.answerKeyChoicesCorrect}>
            <Icon.Ionicons
              name="md-checkmark"
              size={50}
              color="white"
            />
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback>
          <View style={styles.answerKeyChoicesWrong}>
            <Icon.Ionicons
              name="md-close"
              size={50}
              color="white"
            />
          </View>
        </TouchableNativeFeedback>
      </View>
    ) : null;
};

AnswerChoices.propTypes = {
  flipped: PropTypes.bool.isRequired,
};

export default AnswerChoices;
