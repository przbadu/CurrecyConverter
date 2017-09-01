import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight } from 'react-native';

import styles from './styles';
import Icon from './Icon';

function ListItem({
  text,
  onPress,
  selected,
  checkmark,
  visible,
  customIcon,
  iconBackground,
}) {
  return (
    <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
      <View style={styles.row}>
        <Text style={styles.text}>{text}</Text>
        {selected ? (
          <Icon
            checkmark={checkmark}
            visible={visible}
            iconBackground={iconBackground}
          />
        ) : (
          <Icon />
        )}
        {customIcon}
      </View>
    </TouchableHighlight>
  );
}

ListItem.defaultProps = {
  selected: false,
  checkmark: true,
  visible: true,
};

ListItem.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  selected: PropTypes.bool,
  checkmark: PropTypes.bool,
  visible: PropTypes.bool,
  customIcon: PropTypes.element,
  iconBackground: PropTypes.string,
};

export default ListItem;
