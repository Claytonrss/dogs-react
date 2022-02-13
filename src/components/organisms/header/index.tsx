import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../atoms/logo';

// import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <div>
      <nav className="container">
        <Logo />
        <Link to="/login">Login / Criar</Link>
      </nav>
    </div>
  );
};

export default Header;
