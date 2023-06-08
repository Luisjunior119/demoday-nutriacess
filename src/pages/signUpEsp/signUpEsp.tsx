import React, { useState } from "react";

import {
  ButtonWrapper,
  Container,
  Form,
  InputWrapper,
} from "./signUpEsp.styles";
import Logo from "../../components/logo/logo";
import { Text } from "../../components/text/text";
import { Input } from "../../components/input/input";
import Button from "../../components/button/button";

const SignInSpecialist: React.FC = () => {
  const [crn, setCRN] = useState("");
  const [senha, setSenha] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [socialName, setSocialName] = useState("");

  const handleChangeCRN = (value: string) => {
    setCRN(value);
  };

  const handleSenhaChange = (value: string) => {
    setSenha(value);
  };


  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handleNameChange = (value: string) => {
    setName(value);
  };

  const handleSocialnameChange = (value: string) => {
    setSocialName(value);
  };


  return (
    <Container>
      <Logo />

      <Form>
        <Text height={21} weight={700} size="28" color="vinho">
          Cadastro Especialista
        </Text>

        <InputWrapper>
          <Input
            label="Nome:"
            value={name}
            placeholder="Digite seu nome"
            type="text"
            onChange={handleNameChange}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            label="Nome Social:"
            value={socialName}
            placeholder="Digite sua nome social"
            type="text"
            onChange={handleSocialnameChange}
          />
        </InputWrapper>

        <InputWrapper>
          <Input
            label="E-mail:"
            value={email}
            placeholder="Digite seu email"
            type="text"
            onChange={handleEmailChange}
          />
        </InputWrapper>

        <InputWrapper>
          <Input
            label="Senha:"
            value={senha}
            placeholder="Digite sua senha"
            type="password"
            onChange={handleSenhaChange}
          />
        </InputWrapper>

        <InputWrapper>
          <Input
            label="CRN:"
            value={crn}
            placeholder="Digite seu CRN"
            type="number"
            onChange={handleChangeCRN}
          />
        </InputWrapper>

        <ButtonWrapper>
          <Button title="Entrar" variant="primario" xs />
        </ButtonWrapper>

        <Text height={21} weight={400} size="16" color="vinho">
          Não tem cadastro? Faça agora mesmo!
        </Text>
      </Form>
    </Container>
  );
};

export default SignInSpecialist;