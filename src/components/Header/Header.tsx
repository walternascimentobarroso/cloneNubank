import React, {useState} from 'react';
import {ScrollView, TouchableOpacity} from 'react-native';
import {
  Container,
  UpperView,
  UserIconView,
  OptionsIcon,
  TextWelcome,
  MarginIcon,
  TotalBalance,
  AccountView,
  Subtitle,
  BalanceTotal,
  BalanceTotalNotVisible,
  OptionView,
  OptionIcon,
  OptionText,
  ViewScrollView,
} from './Header.styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUser} from '@fortawesome/free-regular-svg-icons/faUser';
import {faEye} from '@fortawesome/free-regular-svg-icons/faEye';
import {faEyeSlash} from '@fortawesome/free-regular-svg-icons/faEyeSlash';
import {faCircleQuestion} from '@fortawesome/free-regular-svg-icons/faCircleQuestion';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons/faEnvelope';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons/faChevronRight';
import {faMoneyBill} from '@fortawesome/free-solid-svg-icons/faMoneyBill';

export function Header() {
  const [showBalance, setShowBalance] = useState(false);

  return (
    <>
      <Container>
        <UpperView>
          <UserIconView>
            <FontAwesomeIcon icon={faUser} size={20} color="#fff" />
          </UserIconView>

          <OptionsIcon>
            <MarginIcon>
              <TouchableOpacity onPress={() => setShowBalance(!showBalance)}>
                {showBalance ? (
                  <FontAwesomeIcon icon={faEye} size={20} color="#fff" />
                ) : (
                  <FontAwesomeIcon icon={faEyeSlash} size={20} color="#fff" />
                )}
              </TouchableOpacity>
            </MarginIcon>
            <MarginIcon>
              <FontAwesomeIcon icon={faCircleQuestion} size={20} color="#fff" />
            </MarginIcon>
            <MarginIcon>
              <FontAwesomeIcon icon={faEnvelope} size={20} color="#fff" />
            </MarginIcon>
          </OptionsIcon>
        </UpperView>
        <TextWelcome>Olá, Walter</TextWelcome>
      </Container>
      <TotalBalance>
        <AccountView>
          <Subtitle>Conta</Subtitle>
          <FontAwesomeIcon icon={faChevronRight} size={20} color="#908D91" />
        </AccountView>
        {showBalance ? (
          <BalanceTotal>R$ 1.000,00 </BalanceTotal>
        ) : (
          <BalanceTotalNotVisible />
        )}
      </TotalBalance>

      <ViewScrollView>
        <ScrollView
          horizontal
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{marginLeft: 24, paddingRight: 50}}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
            <OptionView key={index}>
              <OptionIcon>
                <FontAwesomeIcon icon={faMoneyBill} size={20} color="#000" />
              </OptionIcon>

              <OptionText>PIX</OptionText>
            </OptionView>
          ))}
        </ScrollView>
      </ViewScrollView>
    </>
  );
}
