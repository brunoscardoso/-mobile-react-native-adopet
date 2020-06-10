import React, {useState} from 'react';

import {Container, Card, Title, Label, Dropdown} from './styles';

import Header from '../../components/Header';
import Input from '../../components/Input';

interface petObject {
  name: string;
  size: string;
  gender: string;
}

const RegisterPet = () => {
  const [name, setName] = useState('');

  const [size, setSize] = useState([
    {label: 'Pequeno', value: 'Pequeno'},
    {label: 'Médio', value: 'Médio'},
    {label: 'Grande', value: 'Grande'},
  ]);

  return (
    <Container>
      <Header />
      <Card>
        <Title>Cadastro do Pet</Title>
        <Label>Nome (psiu, batisa ele ai)</Label>
        <Input />
        <Label>Qual porte do pet?</Label>
        <Dropdown onValueChange={(value) => console.log(value)} items={size} />
      </Card>
    </Container>
  );
};

export default RegisterPet;
