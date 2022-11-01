import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {
  Container,
  CardMyCardsView,
  CardInfoView,
  CardInfoItem,
} from './Home.styles';
import {Header} from '../../components/Header/Header';
import {Card} from '../../components/Card/Card';
import {CardInfo} from '../../components/CardInfo/CardInfo';
import {CardFunctionView} from '../../components/CardFunctionView/CardFunctionView';

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

        <CardFunctionView />
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
