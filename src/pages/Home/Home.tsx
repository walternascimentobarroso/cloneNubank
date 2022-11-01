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

export default function Home() {
  return (
    <Container>
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
          <CardInfoItem>
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

          <CardInfoItem>
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

          <CardInfoItem>
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
        </ScrollView>
      </CardInfoView>
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
});
