import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';

function Logo() {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.containerImage}
        source={require('./images/background.png')}
      >
        <Image
          resizeMode="contain"
          source={require('./images/logo.png')}
          style={styles.image}
        />
      </Image>

      <Text style={styles.text}>Currency Converter</Text>
    </View>
  );
}

export default Logo;
