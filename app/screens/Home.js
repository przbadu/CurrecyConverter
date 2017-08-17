import React, { Component } from 'react';
import {
  StatusBar,
  KeyboardAvoidingView,
} from 'react-native';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Button';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';

const TEMP_BASE_CURRENCY = "USD";
const TEMP_QUOTE_CURRENCY = "GBP";
const TEMP_BASE_PRICE = "100";
const TEMP_QUOTE_PRICE = "79.74";
const TEMP_CONVERSION_RATE = 0.7974;
const TEMP_CONVERSION_DATE = new Date();

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.handlePressBaseCurrency = this.handlePressBaseCurrency.bind(this);
    this.handlePressQuoteCurrency = this.handlePressQuoteCurrency.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSwapCurrency = this.handleSwapCurrency.bind(this);
    this.handleOptionsPress = this.handleOptionsPress.bind(this);
  }

  handlePressBaseCurrency() {
    console.log("base currency");
  }

  handlePressQuoteCurrency() {
    console.log("quote currency");
  }

  handleTextChange(text) {
    console.log('changed text: ', text);
  }

  handleSwapCurrency() {
    console.log('swap currency');
  }

  handleOptionsPress() {
    console.log('handle option press');
  }

  render() {
    return (
      <Container>
        <StatusBar
          translucent={false}
          barStyle="light-content"
        ></StatusBar>
        <Header onPress={this.handleOptionsPress} />

        <KeyboardAvoidingView behavior="padding">
          <Logo />
          <InputWithButton
            buttonText={TEMP_BASE_CURRENCY}
            onPress={this.handlePressBaseCurrency}
            defaultValue={TEMP_BASE_PRICE}
            keyboardType="numeric"
            onChangeText={this.handleTextChange}
          />
          <InputWithButton
            buttonText={TEMP_QUOTE_CURRENCY}
            onPress={this.handlePressQuoteCurrency}
            editable={false}
            defaultValue={TEMP_QUOTE_PRICE}
          />
          <LastConverted
            base={TEMP_BASE_CURRENCY}
            quote={TEMP_QUOTE_CURRENCY}
            date={TEMP_CONVERSION_DATE}
            conversionRate={TEMP_CONVERSION_RATE}
          />
          <ClearButton
            onClick={this.handleSwapCurrency}
            text="Reverse Currencies"
          />
        </KeyboardAvoidingView>
      </Container>
    )
  }
};
