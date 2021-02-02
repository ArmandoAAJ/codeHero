import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Text = styled.Text`
  font-size: ${props => (props.size ? `${props.size}px` : '16px')};
  color: ${props => (props.color ? props.color : '#D42026')};
`;

export const Row = styled.View`
  position: relative;
  width: ${props => props.width || 'auto'};
  flex-grow: ${props => (props.grow ? props.grow : 0)};
  flex-direction: row;
  flex-wrap: ${props => (props.wrap ? 'wrap' : 'nowrap')};
`;

export const Button = styled.TouchableOpacity``;
