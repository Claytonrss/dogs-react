import { PHOTO_DELETE } from '@/api/index';
import Loading from '@/components/atoms/loading';
import useFetch from '@/hooks/useFetch';
import React, { MouseEvent } from 'react';
import { Container } from './styles';

const PhotoDelete: React.FC<PhotoDeleteProps> = ({ id }) => {
  const { loading, request } = useFetch();
  async function handleClick() {
    const confirm = window.confirm('Tem certeza que deseja deletar?');

    if (confirm) {
      const token = window.localStorage.getItem('token') || '';
      const { url, options } = PHOTO_DELETE(id, token);
      const { response } = await request(url, options);
      if (response?.ok) {
        window.location.reload();
      }
    }
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container onClick={handleClick}>Deletar</Container>
      )}
    </>
  );
};

export default PhotoDelete;
