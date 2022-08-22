import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { FormContainer } from "../../components/Forms/styles";

export const LogInContainer = styled(FormContainer)``;

export const LogInContent = styled.View`
  flex: 1;
  width: 100%;
  padding: 0 30px;
  margin-bottom: ${RFValue(70)}px;
  align-items: center;
  justify-content: center;
`;

export const LogoImage = styled.Image`
  margin: 20px 0;
`;

export const LogInButton = styled.View`
  margin-top: ${RFValue(10)}px;
`;
