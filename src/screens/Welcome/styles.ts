import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export const WelcomeContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

//Header
export const WelcomeHeader = styled.View`
  align-items: center;
  width: 100%;
  justify-content: center;
  height: 50%;
`;

export const WelcomeLogo = styled.Image`
  width: 48px;
  height: 60px;
  border-radius: 5px;
`;

export const ImageView = styled.View``;

const TitleStyle = styled.Text`
  color: ${(props) => props.theme.colors.title};
`;

//Message
export const MessageWrapper = styled.View`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.shape};
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: 0 10px;
  border-radius: 8px;
`;

export const Icon = styled(MaterialIcons)`
  font-size: ${RFValue(80)}px;
  color: ${(props) => props.theme.colors.shape};
`;

export const WelcomeText = styled.Text`
  font-size: ${RFValue(22)}px;
  text-align: center;
  color: ${(props) => props.theme.colors.shape};
`;
