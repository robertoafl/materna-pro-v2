import styled from "styled-components/native";

interface ButtonContainerProps {
  backgroundColor: string;
}

interface ButtonTextProps {
  textColor: string;
}

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
  background-color: ${(props) => props.backgroundColor};
  padding: 20px;
  border-radius: 8px;
`;

export const ButtonText = styled.Text<ButtonTextProps>`
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => props.textColor};
`;
