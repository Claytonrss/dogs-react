import React from 'react';
import { ButtonContainer } from './styles';

const Button: React.FC<ButtonProps> = props => {
  return <ButtonContainer {...props}>{props.children}</ButtonContainer>;
};

export default Button;
