import React from 'react';

import {
  Background,
  Logo,
  Main,
  Title,
  Description,
  AdoptButton,
  RegisterButton,
  TextButton,
} from './styles';

import Heart from 'react-native-vector-icons/Entypo';
import Dog from 'react-native-vector-icons/FontAwesome5';

import background from '../assets/home-background.png';
import logo from '../assets/logo.png';

const Home = () => {
  return (
    <Background
      source={background}
      imageStyle={{width: 410, height: 380, marginTop: 70}}>
      <Main>
        <Logo source={logo} />
        <Title>Quer adotar ou cadastrar um Pet?</Title>
        <Description>Nós ajudamos a dar um lar para os caramelos!</Description>
        <AdoptButton>
          <Heart name="heart" size={22} color="#fff" />
          <TextButton>Adotar</TextButton>
        </AdoptButton>
        <RegisterButton>
          <Dog name="dog" size={22} color="#fff" />
          <TextButton>Cadastrar</TextButton>
        </RegisterButton>
      </Main>
    </Background>
  );
};

export default Home;
