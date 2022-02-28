import Heading from '@/components/atoms/heading';
import React from 'react';
import { Link } from 'react-router-dom';
import PhotoComments from '../photo-comments';
import { Attributes, Author, Container, Details, Image, Views } from './styles';
import { PhotoContentProps } from './types';

const PhotoContent: React.FC<PhotoContentProps> = ({ data }) => {
  const { photo, comments } = data;

  return (
    <Container>
      <Image src={photo.src} alt={photo.title} />
      <Details>
        <div>
          <Author>
            <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
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
      <PhotoComments id={photo.id} comments={data.comments} />
    </Container>
  );
};

export default PhotoContent;
