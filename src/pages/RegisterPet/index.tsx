import React, {useState, useEffect} from 'react';
import axios from 'axios';

import {
  Container,
  Card,
  Title,
  Label,
  GroupContainer,
  DropDownContainer,
  DropDownStyled,
  Dropdown,
} from './styles';

import Header from '../../components/Header';
import Input from '../../components/Input';

interface petObject {
  name: string;
  size: string;
  gender: string;
}

interface IBGEUFResponse {
  sigla: string;
}

interface IBGECityResponse {
  nome: string;
}

const RegisterPet = () => {
  const [name, setName] = useState('');
  const [size, setSize] = useState('');
  const [gender, setGender] = useState('');

  const [ufs, setUfs] = useState<string[]>([]);

  const [cities, setCities] = useState<string[]>([]);

  const [selectedUf, setSelectedUf] = useState('0');
  const [selectedCity, setSelectedCity] = useState('0');

  useEffect(() => {
    axios
      .get<IBGEUFResponse[]>(
        'https://servicodados.ibge.gov.br/api/v1/localidades/estados',
      )
      .then((response) => {
        const ufInitials = response.data.map((uf) => uf.sigla);
        setUfs(ufInitials);
      });
  }, []);

  useEffect(() => {
    if (selectedUf === '0') {
      return;
    }

    axios
      .get<IBGECityResponse[]>(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`,
      )
      .then((response) => {
        const cityName = response.data.map((city) => city.nome);
        setCities(cityName);
      });
  }, [selectedUf]);

  const [genders] = useState([
    {label: 'Macho', value: 'Macho'},
    {label: 'Fêmea', value: 'Fêmea'},
  ]);

  const [sizes] = useState([
    {label: 'Pequeno', value: 'Pequeno'},
    {label: 'Médio', value: 'Médio'},
    {label: 'Grande', value: 'Grande'},
  ]);

  function handleName(value: string) {
    setName(value);
  }

  function handleSizeDropdown(value: string) {
    setSize(value);
  }

  function handleGenderDropdown(value: string) {
    setGender(value);
  }

  function handleUfsDropdown(value: string) {
    setSelectedUf(value);
  }

  function handleCitiesDropdown(value: string) {
    setSelectedCity(value);
  }

  return (
    <Container>
      <Header />
      <Card>
        <Title>Cadastro do Pet</Title>
        <Label>Nome (psiu, batisa ele ai)</Label>
        <Input />
        <GroupContainer>
          <DropDownContainer>
            <Label>Porte</Label>
            <DropDownStyled>
              <Dropdown
                onValueChange={(value) => handleSizeDropdown(value)}
                items={sizes}
              />
            </DropDownStyled>
          </DropDownContainer>

          <DropDownContainer>
            <Label>Sexo</Label>
            <DropDownStyled>
              <Dropdown
                onValueChange={(value) => handleGenderDropdown(value)}
                items={genders}
              />
            </DropDownStyled>
          </DropDownContainer>
        </GroupContainer>

        <GroupContainer>
          <DropDownContainer>
            <Label>Estado</Label>
            <DropDownStyled>
              <Dropdown
                onValueChange={(value) => handleUfsDropdown(value)}
                items={ufs.map((sigla) => ({
                  key: sigla,
                  label: sigla,
                  value: sigla,
                }))}
              />
            </DropDownStyled>
          </DropDownContainer>

          <DropDownContainer>
            <Label>Cidade</Label>
            <DropDownStyled>
              <Dropdown
                onValueChange={(value) => handleCitiesDropdown(value)}
                items={cities.map((city) => ({
                  key: city,
                  label: city,
                  value: city,
                }))}
              />
            </DropDownStyled>
          </DropDownContainer>
        </GroupContainer>
      </Card>
    </Container>
  );
};

export default RegisterPet;
