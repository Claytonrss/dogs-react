import Head from '@/components/atoms/head';
import Feed from '@/components/organisms/feed';
import React from 'react';

const Home: React.FC = () => {
  return (
    <>
      <Head
        title="Fotos"
        description="Feed de fotos incrível com os melhores dogs"
      />
      <section className="container mainContainer">
        <Feed />
      </section>
    </>
  );
};

export default Home;
