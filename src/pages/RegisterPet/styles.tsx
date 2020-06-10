import styled from 'styled-components/native';
import RNPickerSelect from 'react-native-picker-select';

export const Container = styled.SafeAreaView``;

export const Card = styled.View`
  margin: 24px 8px 10px 8px;
  background: #fff;
  border-radius: 8px;
  padding: 16px 16px 16px 16px;
`;

export const Title = styled.Text`
  color: #322153;
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 8px;
`;

export const Label = styled.Text`
  color: #6c6c80;
  font-size: 16px;
  margin-bottom: 8px;
`;

export const Dropdown = styled(RNPickerSelect)`
  height: 100%;
  width: 100%;
  background: #6c6c80;
`;
