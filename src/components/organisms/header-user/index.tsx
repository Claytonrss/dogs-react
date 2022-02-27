import Heading from '@/components/atoms/heading';
import NavHeaderUser from '@/components/molecules/nav-header-user';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from './styles';

const HeaderUser: React.FC = () => {
  const [title, setTitle] = useState('');
  const { pathname } = useLocation();

  useEffect(() => {
    switch (pathname) {
      case '/conta':
        setTitle('Feed');
        break;
      case '/conta/postar':
        setTitle('Poste Foto');
        break;
      case '/conta/estatisticas':
        setTitle('Estatísticas');
        break;
      default:
        setTitle('Bem vindo');
        break;
    }
  }, [pathname]);

  return (
    <Container>
      <Heading tag="h1">{title}</Heading>
      <NavHeaderUser />
    </Container>
  );
};

export default HeaderUser;
