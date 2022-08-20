import React from "react";
import { ButtonContainer, ButtonText } from "./styles";

interface ButtonContainer {
  backgroundColor: string;
  textColor: string;
  text: string;
}

export function Button({ backgroundColor, textColor, text }: ButtonContainer) {
  return (
    <ButtonContainer backgroundColor={backgroundColor}>
      <ButtonText textColor={textColor}>{text}</ButtonText>
    </ButtonContainer>
  );
}
