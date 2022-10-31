import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 20%;

  padding: 40px 24px 8px 24px;

  background-color: #820ad1;
  justify-content: space-around;
`;

export const UpperView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const OptionsIcon = styled.View`
  flex-direction: row;
`;

export const MarginIcon = styled.View`
  margin-left: 16px;
`;

export const UserIconView = styled.View`
  height: 40px;
  width: 40px;

  align-items: center;
  justify-content: center;

  border-radius: 99px;

  background-color: #a75dd9;
`;

export const TextWelcome = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: #fff;
`;
