import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight, TextInput  } from 'react-native';

import styles from './styles';

function InputWithButton({ onPress, buttonText, editable }) {
  return (
    <View style={styles.container}>
      <TouchableHighlight style={styles.buttonContainer} onPress={onPress}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableHighlight>

      <View style={styles.border} />

      <TextInput style={styles.input} underlineColorAndroid="transparent" />
    </View>
  );
}

InputWithButton.defaultProps = {
  editable: true,
}

InputWithButton.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  editable: PropTypes.bool,
};

export default InputWithButton;
