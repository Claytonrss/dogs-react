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
    <Container>
      <FormsContainer>
        <Outlet />
      </FormsContainer>
    </Container>
  );
};

export default Login;
