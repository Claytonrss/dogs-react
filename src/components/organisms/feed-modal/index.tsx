import { PHOTO_GET } from '@/api/index';
import Error from '@/components/atoms/error';
import Loading from '@/components/atoms/loading';
import useFetch from '@/hooks/useFetch';
import React, { MouseEvent, useEffect } from 'react';
import PhotoContent from '../photo-content';
import { Container } from './styles';
import { FeedModalProps } from './types';

const FeedModal: React.FC<FeedModalProps> = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  function handleOutsideClick({
    target,
    currentTarget,
  }: MouseEvent<HTMLElement>) {
    if (target === currentTarget) {
      setModalPhoto(null);
    }
  }

  return (
    <Container onClick={handleOutsideClick}>
      {error && <Error>{error}</Error>}
      {loading && <Loading>loading</Loading>}
      {data && <PhotoContent data={data} />}
    </Container>
  );
};

export default FeedModal;
