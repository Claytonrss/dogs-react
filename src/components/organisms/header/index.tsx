import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login / Criar</Link>
      </nav>
    </div>
  );
};

export default Header;
