import React from 'react';
import {Container, TextCard} from './Card.styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCreditCard} from '@fortawesome/free-solid-svg-icons/faCreditCard';

export function Card() {
  return (
    <Container>
      <FontAwesomeIcon icon={faCreditCard} size={20} color="#000" />
      <TextCard>Meus Cartões</TextCard>
    </Container>
  );
}
