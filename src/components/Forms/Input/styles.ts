import styled from "styled-components/native";
import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const InputContainer = styled(TextInput)`
  width: 100%;
  padding: 16px 18px;
  margin-bottom: 8px;
  font-size: ${RFValue(14)}px;
  color: ${(props) => props.theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;
`;
