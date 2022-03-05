import Head from '@/components/atoms/head';
import { UserContext } from '@/context/UserContext';
import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { Container, FormsContainer } from './styles';

const Login: React.FC = () => {
  const { login } = useContext(UserContext);

  if (login) {
    return <Navigate to="/conta" />;
  }

  return (
    <>
      <Head
        title="Login"
        description="Faça login para ter acesso a um incrível feed de fotos com os melhores dogs"
      />
      <Container>
        <FormsContainer>
          <Outlet />
        </FormsContainer>
      </Container>
    </>
  );
};

export default Login;
