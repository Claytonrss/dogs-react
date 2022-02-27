import { PHOTO_POST } from '@/api/index';
import Button from '@/components/atoms/button';
import Error from '@/components/atoms/error';
import Input from '@/components/atoms/input';
import useFetch from '@/hooks/useFetch';
import useForm from '@/hooks/useForm';
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, PreviewPhoto } from './styles';

interface ImgFile {
  raw: File;
  preview: string;
}

const UserPhotoPost: React.FC = () => {
  const nome = useForm('username');
  const peso = useForm('number');
  const idade = useForm('number');
  const [img, setImage] = useState<ImgFile>({} as ImgFile);
  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate();

  useEffect(() => {
    if (data) navigate('/conta');
  }, [data, navigate]);

  function handleImgChange(event: ChangeEvent<HTMLInputElement>) {
    const files = event?.target.files;
    if (files && files?.length > 0) {
      setImage({ raw: files[0], preview: URL.createObjectURL(files[0]) });
    }
  }
  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (nome.validate() && peso.validate() && idade.validate()) {
      const formData = new FormData();
      formData.append('img', img.raw);
      formData.append('nome', nome.value);
      formData.append('peso', peso.value);
      formData.append('idade', idade.value);

      const token = window.localStorage.getItem('token')!;
      const { url, options } = PHOTO_POST(formData, token);
      await request(url, options);
    }
  }

  return (
    <Container className="animeLeft">
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="Peso" type="number" name="peso" {...peso} />
        <Input label="Idade" type="number" name="idade" {...idade} />
        <input type="file" name="img" id="img" onChange={handleImgChange} />
        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
        <Error>{error}</Error>
      </form>
      <div>
        {img.preview && (
          <PreviewPhoto style={{ backgroundImage: `url(${img.preview})` }} />
        )}
      </div>
    </Container>
  );
};

export default UserPhotoPost;
