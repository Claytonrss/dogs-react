import React from 'react';
import { Container } from './styles';

const Error: React.FC = ({ children }) => {
  if (!children) return null;
  return <Container>{children}</Container>;
};

export default Error;
