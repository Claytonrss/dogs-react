import Head from '@/components/atoms/head';
import Heading from '@/components/atoms/heading';
import Feed from '@/components/organisms/feed';
import React from 'react';
import { useParams } from 'react-router-dom';

const Profile: React.FC = () => {
  const { user } = useParams();

  return (
    <>
      <Head
        title={user || 'Sua conta'}
        description="Feed de fotos incrível com os melhores dogs"
      />
      <section className="container mainContainer">
        <Heading tag="h1">{user}</Heading>
        <Feed userID={user} />
      </section>
    </>
  );
};

export default Profile;
