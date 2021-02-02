import styled from 'styled-components/native';

export const Image = styled.Image.attrs({
  resizeMode: 'cover'
})`
  height: 280px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const Name = styled.View`
  padding: 30px 0;
  align-items: center;
  justify-content: center;
`;

export const Description = styled.View`
  padding: 30px 15px;
  align-items: center;
  justify-content: center;
`;