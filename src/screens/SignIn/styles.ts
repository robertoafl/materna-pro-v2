import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { FormContainer } from "../../components/Forms/styles";

export const SignInContainer = styled(FormContainer)``;

export const SignInContent = styled.ScrollView`
  width: 100%;
  padding: 16px 30px;
`;

export const SignInButton = styled.View`
  margin-top: ${RFValue(10)}px;
`;
