import React from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Text,
  StyleSheet,
  Animated,
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

class FlipButton extends React.Component {
  constructor(props) {
    super(props);
    this.springValue = new Animated.Value(1);
  }

  spring() {
    this.springValue.setValue(0);
    Animated.spring(
      this.springValue,
      {
        toValue: 1,
        friction: 1,
      },
    ).start();
  }

  render() {
    const { flip } = this.props;
    const transformStyle = {
      ...styles.flipButton,
      transform: [{ scale: this.springValue }],
    };
    return (
      <View style={styles.flipButtonContainer}>
        <TouchableWithoutFeedback
          onPressIn={() => this.spring()}
          onPressOut={() => flip()}
        >
          <Animated.View style={transformStyle}>
            <Text style={styles.flipButton__text}>Flip</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

FlipButton.propTypes = {
  flip: PropTypes.func.isRequired,
};

export default FlipButton;
