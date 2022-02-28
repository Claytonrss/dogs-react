import { UserContext } from '@/context/UserContext';
import React, { useContext } from 'react';
import PhotoCommentsForm from '../photo-comments-form';
import { Container } from './styles';

const PhotoComments: React.FC<PhotoCommentsProps> = ({ id }) => {
  const { login } = useContext(UserContext);

  return <Container>{login && <PhotoCommentsForm id={id} />}</Container>;
};

export default PhotoComments;
