import React from 'react';
import { View, StatusBar } from 'react-native';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';

export default function Home() {
  return (
    <Container>
      <StatusBar
        translucent={false}
        barStyle="light-content"
      ></StatusBar>
      <Logo />
      <InputWithButton />
      <InputWithButton />
    </Container>
  )
};
