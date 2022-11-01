import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {
  Container,
  CardMyCardsView,
  CardInfoView,
  CardInfoItem,
  CardFunctionView,
  CardFunctionRow,
  Touchable,
} from './Home.styles';
import {Header} from '../../components/Header/Header';
import {Card} from '../../components/Card/Card';
import {CardInfo} from '../../components/CardInfo/CardInfo';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCreditCard} from '@fortawesome/free-solid-svg-icons/faCreditCard';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons/faChevronRight';

export default function Home() {
  return (
    <Container>
      <ScrollView contentContainerStyle={{paddingBottom: 50}}>
        <Header />
        <CardMyCardsView>
          <Card />
        </CardMyCardsView>
        <CardInfoView>
          <ScrollView
            horizontal
            contentContainerStyle={{
              paddingHorizontal: 24,
            }}
            showsHorizontalScrollIndicator={false}>
            {[1, 2, 3].map((item, index) => (
              <CardInfoItem key={index}>
                <CardInfo
                  link="https://google.com"
                  text={
                    <Text style={styles.textBlack}>
                      Conheca Conheca Conheca Conheca Conheca Conheca
                      <Text style={styles.textPurple}> o app o app o app </Text>
                    </Text>
                  }
                />
              </CardInfoItem>
            ))}
          </ScrollView>
        </CardInfoView>

        <CardFunctionView>
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
        </CardFunctionView>
      </ScrollView>
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
