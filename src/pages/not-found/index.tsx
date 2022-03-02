import Heading from '@/components/atoms/heading';
import React from 'react';

// import { Container } from './styles';

const NotFound: React.FC = () => {
  return (
    <section className="container mainContainer">
      <Heading tag="h1">Erro: 404</Heading>
      <p>Página não encontrada</p>
    </section>
  );
};

export default NotFound;
