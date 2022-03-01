import React from 'react';
import Image from '@/components/atoms/image';
import { Container } from './styles';
import { FeedPhotoItemProps } from './types';

const FeedPhotosItem: React.FC<FeedPhotoItemProps> = ({
  photo,
  setModalPhoto,
}) => {
  function handleClick() {
    setModalPhoto(photo);
  }

  return (
    <Container onClick={handleClick}>
      <Image src={photo.src} alt={photo.title} loading="lazy" />
      <span>{photo.acessos}</span>
    </Container>
  );
};

export default FeedPhotosItem;
