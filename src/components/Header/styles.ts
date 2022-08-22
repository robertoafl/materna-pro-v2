import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const HeaderContainer = styled.View`
  background-color: ${(props) => props.theme.colors.primary};
  width: 100%;
  height: ${RFValue(113)}px;

  justify-content: flex-end;
  align-items: center;

  padding-bottom: 19px;
`;

export const HeaderTitle = styled.Text`
  color: ${(props) => props.theme.colors.shape};
  font-size: ${RFValue(18)}px;
  font-weight: bold;
`;
