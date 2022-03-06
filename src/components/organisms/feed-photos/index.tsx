import { PHOTOS_GET } from '@/api/index';
import Error from '@/components/atoms/error';
import FeedPhotosItem from '@/components/atoms/feed-photos-item';
import Loading from '@/components/atoms/loading';
import useFetch from '@/hooks/useFetch';
import React, { useEffect } from 'react';
import { PhotoProps } from 'types';
import { Container } from './styles';
import { FeedPhotosProps } from './types';

const FeedPhotos: React.FC<FeedPhotosProps> = ({
  setModalPhoto,
  setInfinite,
  userID,
  page,
}) => {
  const { data, error, loading, request } = useFetch();
  const photosPerPage = 6;

  useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({
        page,
        total: photosPerPage,
        user: userID || '0',
      });
      const { response, json } = await request(url, options);
      if (response && response?.ok && json.length < photosPerPage) {
        setInfinite(false);
      }
    }
    fetchPhotos();
  }, [userID, photosPerPage, page, setInfinite]);

  if (error) return <Error>{error}</Error>;
  if (loading) return <Loading />;
  if (data && (data as []).length == 0 && page <= 1)
    return <p>Você ainda não possui fotos.</p>;
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
