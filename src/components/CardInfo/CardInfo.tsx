import React, {ReactNode} from 'react';
import {Linking} from 'react-native';
import {Container} from './CardInfo.styles';

type Pros = {
  text: ReactNode;
  link: string;
};

export function CardInfo({text, link}: Pros) {
  return <Container onPress={() => Linking.openURL(link)}>{text}</Container>;
}
