import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Container, CardFunctionRow, Touchable} from './CardFunctionView.styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCreditCard} from '@fortawesome/free-solid-svg-icons/faCreditCard';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons/faChevronRight';

export function CardFunctionView() {
  return (
    <Container>
      <FontAwesomeIcon icon={faCreditCard} size={20} color="#000" />

      <CardFunctionRow>
        <Text style={styles.subtitle}>CardFunctionRow</Text>
        <FontAwesomeIcon icon={faChevronRight} size={20} color="#000" />
      </CardFunctionRow>

      <Text style={styles.textGray}>Fatura Atual</Text>
      <Text style={styles.title}>R$ 239,99</Text>
      <Text style={styles.textGray}>Limite Disponivel de 3.000,00</Text>

      <Touchable>
        <Text style={styles.textButton}>Parcelar Fatura</Text>
      </Touchable>
    </Container>
  );
}

const styles = StyleSheet.create({
  textBlack: {
    color: '#000',
  },
  textPurple: {
    color: '#820AD1',
  },
  textGray: {
    color: '#c2bebe',
    fontWeight: 'bold',
    marginTop: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 8,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  textButton: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
