import React from 'react';
import {
  View,
  TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';

const SectionCircle = (props) => {
  const { onPressButton, color } = props;
  return (
    <TouchableHighlight onPress={onPressButton}>
      <View
        style={{
          backgroundColor: color,
          width: 90,
          height: 90,
          borderRadius: 45,
          margin: 30,
        }}
      />
    </TouchableHighlight>
  );
};


SectionCircle.propTypes = {
  onPressButton: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
};

export default SectionCircle;
