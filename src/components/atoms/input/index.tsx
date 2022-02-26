import React from 'react';
import Error from '../error';
import { InputContainer } from './styles';
import { InputProps } from './types';

const Input: React.FC<InputProps> = ({
  label,
  type,
  name,
  onChange,
  onBlur,
  error,
}) => {
  return (
    <InputContainer>
      {label && <label htmlFor={name}>{label}</label>}
      <input type={type} id={name} onChange={onChange} onBlur={onBlur} />
      <Error>{error}</Error>
    </InputContainer>
  );
};

export default Input;
