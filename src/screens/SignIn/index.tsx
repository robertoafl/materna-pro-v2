import { useContext, useState } from "react";
import { ThemeContext } from "styled-components";
import { Button } from "../../components/Button";
import { Input } from "../../components/Forms/Input";
import { Header } from "../../components/Header";
import { SignInButton, SignInContainer, SignInContent } from "./styles";
import { Alert } from "react-native";

export function SignIn() {
  const { colors } = useContext(ThemeContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCPF] = useState("");
  const [bothDate, setBothDate] = useState("");
  const [phone, setPhone] = useState("");
  const [emergencyPhone, setEmergencyPhone] = useState("");
  const [lastMenstruationDate, setLastMenstruationDate] = useState("");
  const [firstTrimesterEndDate, setFirstTrimesterDate] = useState("");
  const [secoundTrimesterEndDate, setSecoundTrimesterDate] = useState("");
  const [tirthTrimesterEndDate, setTirthTrimesterDate] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SignInContainer>
      <Header text="Cadastro" />
      <SignInContent>
        <Input placeholder="Nome" value={name} onChangeText={setName} />
        <Input placeholder="E-mail" value={email} onChangeText={setEmail} />
        <Input
          placeholder="CPF"
          value={cpf}
          onChangeText={(value) => setCPF(value)}
        />
        <Input
          placeholder="Data de nascimento"
          value={bothDate}
          onChangeText={(value) => setBothDate(value)}
        />
        <Input
          placeholder="Telefone"
          value={phone}
          onChangeText={(value) => setPhone(value)}
        />
        <Input
          placeholder="Telefone de emergência"
          value={emergencyPhone}
          onChangeText={(value) => setEmergencyPhone(value)}
        />
        <Input
          placeholder="Data da última menstruação"
          value={lastMenstruationDate}
          onChangeText={(value) => setLastMenstruationDate(value)}
        />
        <Input
          placeholder="Data de término do primeiro trimestre"
          value={firstTrimesterEndDate}
          onChangeText={(value) => setFirstTrimesterDate(value)}
        />
        <Input
          placeholder="Data de término do segundo trimestre"
          value={secoundTrimesterEndDate}
          onChangeText={(value) => setSecoundTrimesterDate(value)}
        />
        <Input
          placeholder="Data de término do terceiro trimestre"
          value={tirthTrimesterEndDate}
          onChangeText={(value) => setTirthTrimesterDate(value)}
        />
        <Input
          placeholder="Senha"
          value={password}
          onChangeText={(value) => setPassword(value)}
        />
        <SignInButton>
          <Button
            text="Salvar dados"
            textColor={colors.shape}
            backgroundColor={colors.primary}
          />
        </SignInButton>
      </SignInContent>
    </SignInContainer>
  );
}
``;
