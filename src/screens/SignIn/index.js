import React, { useState } from "react";
import { Text } from "react-native";
import {
  Container,
  ImputArea,
  CustomButton,
  CustomButtonText,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold,
} from "./styles";
import BarberLogo from "../../assets/barber.svg";
import SignInput from "../../components/SignInput";
import EmailIcon from "../../assets/email.svg";
import LockIcon from "../../assets/lock.svg";
import { useNavigation } from "@react-navigation/native";

export default () => {
  const navigation = useNavigation();

  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");

  const handleSignClick = () => {};

  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{ name: "SignUp" }],
    });
  };

  return (
    <Container>
      <BarberLogo width="100%" height="160" />

      <ImputArea>
        <SignInput
          IconSvg={EmailIcon}
          placeholder="Digite seu e-mail"
          value={emailField}
          onChangeText={(text) => setEmailField(text)}
        />
        <SignInput
          IconSvg={LockIcon}
          placeholder="Digite sua senha"
          value={passwordField}
          onChangeText={(text) => setPasswordField(text)}
          password={true}
        />

        <CustomButton onPress={handleSignClick}>
          <CustomButtonText>LOGIN</CustomButtonText>
        </CustomButton>
      </ImputArea>

      <SignMessageButton onPress={handleMessageButtonClick}>
        <SignMessageButtonText>
          Ainda não possui uma conta?
        </SignMessageButtonText>
        <SignMessageButtonTextBold>Cadastra-se</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
};
