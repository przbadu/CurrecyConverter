import React, { Component } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { ListItem, Seperator } from '../components/List';

const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

class Options extends Component {
  handleThemesPress() {
    console.log('theme pressed');
  }

  handleSitePress() {
    console.log('site  pressed');
  }

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem
          text="Themes"
          onPress={this.handleThemesPress}
          customIcon={
            <Ionicons name="ios-arrow-forward" color={ICON_COLOR} size={ICON_SIZE} />
          }
        />
        <Seperator />
        <ListItem
          text="fixer.io"
          onPress={this.handleSitePress}
          customIcon={
            <Ionicons name="ios-link" color={ICON_COLOR} size={ICON_SIZE} />
          }
        />
      </ScrollView>
    );
  }
}

export default Options;