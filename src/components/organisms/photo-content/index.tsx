import Heading from '@/components/atoms/heading';
import Image from '@/components/atoms/image';
import PhotoDelete from '@/components/organisms//photo-delete';
import PhotoComments from '@/components/organisms/photo-comments';
import { UserContext } from '@/context/UserContext';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Attributes, Author, Container, Details, Views } from './styles';
import { PhotoContentProps } from './types';

const PhotoContent: React.FC<PhotoContentProps> = ({ data }) => {
  const { photo, comments } = data;
  const context = useContext(UserContext);

  return (
    <Container>
      <Image src={photo.src} alt={photo.title} />
      <Details>
        <div>
          <Author>
            {context.user && context.user.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}

            <Views>{photo.acessos}</Views>
          </Author>
          <Heading tag="h1">
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </Heading>
          <Attributes>
            <li>{photo.peso} kg</li>
            <li>{photo.idade} anos</li>
          </Attributes>
        </div>
      </Details>
      <PhotoComments id={photo.id} comments={comments} />
    </Container>
  );
};

export default PhotoContent;
