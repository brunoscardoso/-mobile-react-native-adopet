import React from 'react';
import {Container, Card, Title, Label} from './styles';

import Header from '../../components/Header';
import Input from '../../components/Input';

const RegisterPet = () => {
  return (
    <Container>
      <Header />
      <Card>
        <Title>Cadastro do Pet</Title>
        <Label>Nome (psiu, batisa ele ai)</Label>
        <Input />
      </Card>
    </Container>
  );
};

export default RegisterPet;
