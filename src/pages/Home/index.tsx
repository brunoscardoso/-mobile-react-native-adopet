import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Heart from 'react-native-vector-icons/Entypo';
import Dog from 'react-native-vector-icons/FontAwesome5';
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

import background from '../../assets/home-background.png';
import logo from '../../assets/logo.png';

const Home: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Background
      source={background}
      imageStyle={{ width: 410, height: 380, marginTop: 70 }}
    >
      <Main>
        <Logo source={logo} />
        <Title>Quer adotar ou cadastrar um Pet?</Title>
        <Description>Nós ajudamos a dar um lar para os caramelos!</Description>
        <AdoptButton onPress={() => navigation.navigate('AdoptPet')}>
          <Heart name="heart" size={22} color="#fff" />
          <TextButton>Adotar</TextButton>
        </AdoptButton>
        <RegisterButton onPress={() => navigation.navigate('RegisterPet')}>
          <Dog name="dog" size={22} color="#fff" />
          <TextButton>Cadastrar</TextButton>
        </RegisterButton>
      </Main>
    </Background>
  );
};

export default Home;
