import { useContext, useState } from "react";
import { ThemeContext } from "styled-components";
import { Button } from "../../components/Button";
import { Input } from "../../components/Forms/Input";
import { Header } from "../../components/Header";
import { LogInButton, LogInContainer, LogInContent, LogoImage } from "./styles";

export function LogIn() {
  const { colors } = useContext(ThemeContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <LogInContainer>
      <Header text="Login" />
      <LogInContent>
        <LogoImage source={require("../../assets/icon/favicon.png")} />
        <Input
          placeholder="E-mail"
          value={email}
          onChangeText={(value) => setEmail(value)}
        />
        <Input
          placeholder="Senha"
          value={password}
          onChangeText={(value) => setPassword(value)}
        />
        <LogInButton>
          <Button
            textColor={colors.shape}
            backgroundColor={colors.primary}
            text={"Acessar sistema"}
          />
        </LogInButton>
      </LogInContent>
    </LogInContainer>
  );
}
