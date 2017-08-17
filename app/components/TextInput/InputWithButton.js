import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight, TextInput  } from 'react-native';
import color from 'color';

import styles from './styles';

function InputWithButton({...props}) {
  const { onPress, buttonText, editable } = props;
  const underlayColor = color(styles.$buttonBackgroundColorBase).darken(
    styles.$buttonBackgroundColorModifier
  );

  const containerStyles = [styles.container];
  if (editable == false) {
    containerStyles.push(styles.containerDisabled);
  }

  return (
    <View style={containerStyles}>
      <TouchableHighlight
        style={styles.buttonContainer}
        onPress={onPress}
        underlayColor={underlayColor}
      >
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableHighlight>

      <View style={styles.border} />

      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        {...props}
      />
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
