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
  margin: 5px 0 8px 0;
`;

export const GroupContainer = styled.View`
  margin: 10px 0 0 0;
  flex-direction: row;
  justify-content: space-between;
`;

export const DropDownContainer = styled.View`
  justify-content: center;
`;

export const DropDownStyled = styled.View`
  padding: 0 15px;
  width: 180px;
  height: 40px;
  background: #f0f0f5;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;

export const Dropdown = styled(RNPickerSelect)`
  background: #6c6c80;
`;

export const PhotoButton = styled.TouchableOpacity``;

export const Photo = styled.Image`
  width: 100%;
  height: 185px;
  border-radius: 8px;
  margin-top: 10px;
`;

export const RegisterButton = styled.TouchableOpacity`
  background: #34cb79;
  height: 50px;
  flex-direction: row;
  border-radius: 10px;
  align-items: center;
  padding-left: 15px;
  margin-top: 10px;
`;

export const TextButton = styled.Text`
  justify-content: center;
  text-align: center;
  color: #fff;
  font-weight: bold;
  padding-left: 10px;
  font-size: 17px;
`;
