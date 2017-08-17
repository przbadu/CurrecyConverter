import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';

const TEMP_BASE_CURRENCY = "USD";
const TEMP_QUOTE_CURRENCY = "GBP";
const TEMP_BASE_PRICE = "100";
const TEMP_QUOTE_PRICE = "79.74";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.handlePressBaseCurrency = this.handlePressBaseCurrency.bind(this);
    this.handlePressQuoteCurrency = this.handlePressQuoteCurrency.bind(this);
  }

  handlePressBaseCurrency() {
    console.log("base currency");
  }

  handlePressQuoteCurrency() {
    console.log("quote currency");
  }

  render() {
    return (
      <Container>
        <StatusBar
          translucent={false}
          barStyle="light-content"
        ></StatusBar>
        <Logo />
        <InputWithButton
          buttonText={TEMP_BASE_CURRENCY}
          onPress={this.handlePressBaseCurrency}
        />
        <InputWithButton
          buttonText={TEMP_QUOTE_CURRENCY}
          onPress={this.handlePressQuoteCurrency}
          editable={false}
        />
      </Container>
    )
  }
};
