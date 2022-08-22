import React from "react";
import { TouchableOpacityProps } from "react-native";
import { ButtonContainer, ButtonText } from "./styles";

interface ButtonContainer extends TouchableOpacityProps {
  backgroundColor: string;
  textColor: string;
  text: string;
}

export function Button({
  backgroundColor,
  textColor,
  text,
  ...rest
}: ButtonContainer) {
  return (
    <ButtonContainer backgroundColor={backgroundColor}>
      <ButtonText textColor={textColor}>{text}</ButtonText>
    </ButtonContainer>
  );
}
