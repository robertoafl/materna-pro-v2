import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { Button } from "../../components/Button";
import { LogIn } from "../LogIn";
import { SignIn } from "../SignIn";
import {
  WelcomeContainer,
  WelcomeHeader,
  WelcomeText,
  MessageWrapper,
  WelcomeLogo,
  Icon,
} from "./styles";
import { StackNavigationProp } from "@react-navigation/stack";

interface WelcomeProps {
  navigation: StackNavigationProp<any, any>;
}

export function Welcome({ navigation }: WelcomeProps) {
  const { colors } = useContext(ThemeContext);
  return (
    <WelcomeContainer>
      <WelcomeHeader>
        <WelcomeLogo
          source={require("../../assets/img/materna_pro_logo.png")}
          style={{ flex: 1, resizeMode: "contain", width: 400, height: 200 }}
        />
      </WelcomeHeader>
      <MessageWrapper>
        <Icon name="pregnant-woman" />
        <WelcomeText>
          Acompanhamento pré-natal odontológico e educação em saúde da gestante
          e do bebê.
        </WelcomeText>
      </MessageWrapper>
    </WelcomeContainer>
  );
}
