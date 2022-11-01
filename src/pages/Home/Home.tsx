import React from 'react';
import {Container, CardMyCardsView} from './Home.styles';
import {Header} from '../../components/Header/Header';
import {Card} from '../../components/Card/Card';

export default function Home() {
  return (
    <Container>
      <Header />
      <CardMyCardsView>
        <Card />
      </CardMyCardsView>
    </Container>
  );
}
