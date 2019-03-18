import React from 'react';
import {
  TouchableWithoutFeedback,
  StyleSheet,
  Animated,
  Easing,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  circle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    margin: 30,
  },
});


const SectionCircle = (props) => {
  const { onPressButton, color } = props;
  const scaleValue = new Animated.Value(0);

  const cardScale = scaleValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 1.5, 2],
  });

  const transformStyle = {
    ...styles.circle,
    backgroundColor: color,
    transform: [{ scale: cardScale }],
  };

  return (
    <TouchableWithoutFeedback
      onPressIn={() => {
        scaleValue.setValue(0);
        Animated.timing(scaleValue, {
          toValue: 1,
          duration: 250,
          easing: Easing.linear,
          useNativeDriver: true,
        }).start();
      }}
      onPressOut={() => {
        Animated.timing(scaleValue, {
          toValue: 0,
          duration: 100,
          easing: Easing.linear,
          useNativeDriver: true,
        }).start();
        onPressButton();
      }}
    >
      <Animated.View
        style={transformStyle}
      />
    </TouchableWithoutFeedback>
  );
};

SectionCircle.propTypes = {
  onPressButton: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
};

export default SectionCircle;
