import React from 'react';
import { ButtonContainer } from './styles';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = props => {
  return <ButtonContainer {...props}>{props.children}</ButtonContainer>;
};

export default Button;
