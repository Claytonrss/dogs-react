import { PHOTO_GET } from '@/api/index';
import Error from '@/components/atoms/error';
import Loading from '@/components/atoms/loading';
import PhotoContent from '@/components/organisms/photo-content';
import useFetch from '@/hooks/useFetch';
import React, { useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';

const Photo: React.FC = () => {
  const { id } = useParams();
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    if (id) {
      const { url, options } = PHOTO_GET(id);
      request(url, options);
    }
  }, [request, id]);

  if (error) return <Error>{error}</Error>;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="container mainContainer">
        <PhotoContent data={data} isSingle={true} />
      </section>
    );
  return null;
};

export default Photo;
