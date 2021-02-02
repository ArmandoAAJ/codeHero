import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  height: 100%;
`;

export const Header = styled.View`
  margin: 12px 30px;
`;

export const List = styled.View`
`;

export const Top = styled.View`
  background-color: #D42026;
  height: 35px;
`;

export const Card = styled.TouchableOpacity`
  padding: 18px 0;
  border-bottom-width: 1px;
  border-color: #D42026;
`;

export const AlignName = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Footer = styled.View`
  margin: 18px 0 24px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const ButtonPage = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 3px;
  width: 60px;
  height: 60px;
  border: 1px solid #D42026;
  border-radius: 30px;
  background-color: ${props => props.isSelect ? '#d42026' : '#FFF'};
`;

export const Indice = styled.Text`
  color: ${props => props.isSelect ? '#FFF' : '#d42026'};
`;

export const Bottom = styled.View`
  background-color: #D42026;
  height: 15px;
`;

export const Underline = styled.View`
  border-bottom-width: 2px;
  padding-bottom: 3px;
  border-bottom-color: #D42026;
  margin-bottom: 12px;
`;

export const Input = styled.TextInput`
  border: 1.5px solid #ddd;
  border-radius: 5px;
  padding: 5px;
`;