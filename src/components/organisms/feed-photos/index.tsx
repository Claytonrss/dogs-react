import { PHOTOS_GET } from '@/api/index';
import Error from '@/components/atoms/error';
import FeedPhotosItem from '@/components/atoms/feed-photos-item';
import Loading from '@/components/atoms/loading';
import useFetch from '@/hooks/useFetch';
import React, { useEffect } from 'react';
import { PhotoProps } from 'types';
import { Container } from './styles';
import { FeedPhotosProps } from './types';

const FeedPhotos: React.FC<FeedPhotosProps> = ({ setModalPhoto, userID }) => {
  const { data, error, loading, request } = useFetch();
  useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({
        page: 1,
        total: 3,
        user: userID || 0,
      });
      const { response, json } = await request(url, options);
    }
    fetchPhotos();
  }, [userID]);

  if (error) return <Error>{error}</Error>;
  if (loading) return <Loading />;
  if (data)
    return (
      <Container className="animeLeft">
        {(data as []).map((photo: PhotoProps) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </Container>
    );
  return null;
};

export default FeedPhotos;
