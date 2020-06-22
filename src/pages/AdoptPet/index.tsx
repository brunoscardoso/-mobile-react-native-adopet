import React from 'react';
import MapView from 'react-native-maps';

import Header from '../../components/Header';
import { Container } from './styles';

const AdoptPet: React.FC = () => {
  return (
    <Container>
      <Header />
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </Container>
  );
};

export default AdoptPet;
