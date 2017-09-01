import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';

import styles from './styles';

function Icon({ checkmark, visible, iconBackground }) {
  if (visible) {
    const iconStyles = [styles.icon];
    iconStyles.push(styles.iconVisible);

    if (iconBackground) {
      iconStyles.push({ backgroundColor: iconBackground });
    }

    return (
      <View style={iconStyles}>
        {checkmark ? (
          <Image
            resizeMode="contain"
            style={styles.checkIcon}
            source={require('./images/check.png')}
          />
        ) : null}
      </View>
    );
  }

  return <View style={styles.icon} />;
}

Icon.propTypes = {
  checkmark: PropTypes.bool,
  visible: PropTypes.bool,
  iconBackground: PropTypes.string,
};

export default Icon;
