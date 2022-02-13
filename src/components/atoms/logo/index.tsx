import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Dogs } from '../../../assets/images/dogs.svg';
import { LogoStyled } from './styles';

const Logo: React.FC = () => (
  <LogoStyled>
    <Link to="/" aria-label="Dogs - Home">
      <Dogs />
    </Link>
  </LogoStyled>
);

export default Logo;
