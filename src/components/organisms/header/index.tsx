import Logo from '@/components/atoms/logo';
import { UserContext } from '@/context/UserContext';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContainerLogin, ContainerLogo, HeaderContainer, Nav } from './styles';

const Header: React.FC = () => {
  const { user, userLogout } = useContext(UserContext);

  return (
    <HeaderContainer>
      <Nav className="container">
        <Link to="/" aria-label="Dogs - Home">
          <ContainerLogo>
            <Logo />
          </ContainerLogo>
        </Link>
        {user?.nome ? (
          <>
            <Link to="/conta">
              <ContainerLogin>{user.nome}</ContainerLogin>
            </Link>
          </>
        ) : (
          <Link to="/login">
            <ContainerLogin>Login / Criar</ContainerLogin>
          </Link>
        )}
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
