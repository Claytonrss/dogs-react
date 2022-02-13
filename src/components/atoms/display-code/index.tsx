import React from 'react';
import { StyledCode } from './styles';

const DisplayCode: React.FC = ({ children }) => {
  return <StyledCode>{children}</StyledCode>;
};

export default DisplayCode;
