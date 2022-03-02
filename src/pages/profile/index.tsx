import Heading from '@/components/atoms/heading';
import Feed from '@/components/organisms/feed';
import React from 'react';
import { useParams } from 'react-router-dom';

// import { Container } from './styles';

const Profile: React.FC = () => {
  const { user } = useParams();

  return (
    <section className="container mainContainer">
      <Heading tag="h1">{user}</Heading>
      <Feed userID={user} />
    </section>
  );
};

export default Profile;
