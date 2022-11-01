import styled from 'styled-components/native';

export const Container = styled.View`
  border-top-width: 1px;
  border-color: #e6e6e6;

  margin-top: 24px;

  padding: 24px;
`;

export const CardFunctionRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 8px;
`;

export const Touchable = styled.TouchableOpacity`
  padding: 8px;
  background-color: #e6e6e6;

  width: 130px;

  border-radius: 16px;

  margin-top: 16px;

  align-items: center;
`;
