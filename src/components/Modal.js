import React from 'react';
import { Image, Name, Description } from '../styles/Modal';
import { Text, Container } from '../components/Layout';

const Modal = ({ data }) => {
  return (
    <Container>
      <Image
        width={'100%'}
        source={{ uri: `${data.thumbnail.path}.${data.thumbnail.extension}` }}
      />
        <Name>
          <Text size="24" color="#949494"
            style={{ fontFamily: 'Roboto_900Black', textAlign: 'center' }}
          >
            {data.name}
          </Text>
        </Name>
        <Description>
          <Text size="16" color="#949494"
          style={{ fontFamily: 'Roboto_300Light', textAlign: 'center'}}
          >
           {data.description}
          </Text>
        </Description>
    </Container>
  )
}

export default Modal;