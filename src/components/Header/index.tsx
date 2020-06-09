import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {Container, BackButton, Logo} from './styles';
import ArrowLeft from 'react-native-vector-icons/Ionicons';
import logo from '../../assets/logo.png';

const Header = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <BackButton onPress={() => navigation.navigate('Home')}>
        <ArrowLeft name="md-arrow-back" size={32} color="#34cb79" />
      </BackButton>
      <Logo source={logo} />
      <BackButton />
    </Container>
  );
};

export default Header;
