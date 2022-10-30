import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {
  Container,
  UpperView,
  UserIconView,
  OptionsIcon,
  TextWelcome,
  MarginIcon,
} from './Header.styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUser} from '@fortawesome/free-regular-svg-icons/faUser';
import {faEye} from '@fortawesome/free-regular-svg-icons/faEye';
import {faEyeSlash} from '@fortawesome/free-regular-svg-icons/faEyeSlash';
import {faCircleQuestion} from '@fortawesome/free-regular-svg-icons/faCircleQuestion';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons/faEnvelope';

export function Header() {
  const [showBalance, setShowBalance] = useState(false);

  return (
    <Container>
      <UpperView>
        <UserIconView>
          <FontAwesomeIcon icon={faUser} size={20} color="white" />
        </UserIconView>

        <OptionsIcon>
          <MarginIcon>
            <TouchableOpacity onPress={() => setShowBalance(!showBalance)}>
              {showBalance ? (
                <FontAwesomeIcon icon={faEye} size={20} color="white" />
              ) : (
                <FontAwesomeIcon icon={faEyeSlash} size={20} color="white" />
              )}
            </TouchableOpacity>
          </MarginIcon>
          <MarginIcon>
            <FontAwesomeIcon icon={faCircleQuestion} size={20} color="white" />
          </MarginIcon>
          <MarginIcon>
            <FontAwesomeIcon icon={faEnvelope} size={20} color="white" />
          </MarginIcon>
        </OptionsIcon>
      </UpperView>
      <TextWelcome>Olá, Walter</TextWelcome>
    </Container>
  );
}
