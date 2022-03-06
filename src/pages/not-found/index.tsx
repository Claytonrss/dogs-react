import Head from '@/components/atoms/head';
import Heading from '@/components/atoms/heading';
import React from 'react';

const NotFound: React.FC = () => {
  return (
    <>
      <Head
        title={'Ops página não encontrada'}
        description="Ops página não encontrada"
      />
      <section className="container mainContainer">
        <Heading tag="h1">Erro: 404</Heading>
        <p>Página não encontrada</p>
      </section>
    </>
  );
};

export default NotFound;
