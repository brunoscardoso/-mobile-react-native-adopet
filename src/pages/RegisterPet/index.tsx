import React from 'react';
import {Container} from './styles';

import Header from '../../components/Header';
import CardContainer from '../../components/CardContainer';
import Input from '../../components/Input';

const RegisterPet = () => {
  return (
    <Container>
      <Header />
      <CardContainer>
        <Input />
      </CardContainer>
    </Container>
  );
};

export default RegisterPet;
