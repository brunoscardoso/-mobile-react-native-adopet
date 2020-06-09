import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Container, TInput} from './styles';

const Input = () => {
  return (
    <Container>
      <Icon name="textbox" size={20} color="rgba(255,255,255,0.6)" />
      <TInput />
    </Container>
  );
};

export default Input;
