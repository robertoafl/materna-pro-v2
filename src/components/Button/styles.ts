import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native-gesture-handler";
interface ButtonContainerProps {
  backgroundColor: string;
}

interface ButtonTextProps {
  textColor: string;
}

export const ButtonContainer = styled(TouchableOpacity)<ButtonContainerProps>`
  background-color: ${(props) => props.backgroundColor};
  padding: 20px;
  border-radius: 8px;
`;

export const ButtonText = styled.Text<ButtonTextProps>`
  font-size: ${RFValue(20)}px;
  text-align: center;
  font-weight: bold;
  color: ${(props) => props.textColor};
`;
