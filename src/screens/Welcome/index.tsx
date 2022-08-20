import React from "react";
import { Button } from "../../components/Button";
import {
  WelcomeButtons,
  WelcomeContainer,
  WelcomeHeader,
  WelcomeSubtitle,
  WelcomeText,
  WelcomeTitle,
} from "./styles";

export function Welcome() {
  return (
    <WelcomeContainer>
      <WelcomeHeader>
        <WelcomeTitle>materna:pro</WelcomeTitle>
        <WelcomeSubtitle>Pré-natal Odontológico</WelcomeSubtitle>
      </WelcomeHeader>
      <WelcomeText>
        Acompanhamento pré-natal odontológico e educação em saúde da gestante e
        do bebê.
      </WelcomeText>
      <WelcomeButtons>
        <Button text="Cadastro" backgroundColor="#64BCCE" textColor="#FDE426" />
        <Button
          text="Limpar Cache"
          backgroundColor="#EB435A"
          textColor="#FFF"
        />
      </WelcomeButtons>
    </WelcomeContainer>
  );
}
