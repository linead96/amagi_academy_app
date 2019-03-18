import React from 'react';
import {
  View,
  TouchableNativeFeedback,
  Text,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  flipButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingLeft: '20%',
    paddingRight: '20%',
  },
  flipButton: {
    backgroundColor: 'yellow',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    paddingLeft: '20%',
    paddingRight: '20%',
  },
  flipButton__text: {
    textAlign: 'center',
    fontSize: 30,
    margin: 10,
  },
});

const FlipButton = props => (
  <View style={styles.flipButtonContainer}>
    <TouchableNativeFeedback onPress={() => props.flip()}>
      <View style={styles.flipButton}>
        <Text style={styles.flipButton__text}>Flip</Text>
      </View>
    </TouchableNativeFeedback>
  </View>
);

FlipButton.propTypes = {
  flip: PropTypes.func.isRequired,
};

export default FlipButton;
