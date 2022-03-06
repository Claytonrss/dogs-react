import { PASSWORD_LOST_POST } from '@/api/index';
import Button from '@/components/atoms/button';
import Error from '@/components/atoms/error';
import Heading from '@/components/atoms/heading';
import Input from '@/components/atoms/input';
import useFetch from '@/hooks/useFetch';
import useForm from '@/hooks/useForm';
import React, { FormEvent } from 'react';

const LoginPasswordLost: React.FC = () => {
  const login = useForm('notEmpty');
  const { data, error, loading, request } = useFetch();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (login.validate()) {
      const urlSite = window.location.href;
      const { url, options } = PASSWORD_LOST_POST({
        login: login.value,
        url: urlSite.replace('perdeu', 'resetar'),
      });
      await request(url, options);
    }
  }

  return (
    <section className="animeLeft">
      <Heading tag="h1">Perdeu a senha?</Heading>
      {data ? (
        <p style={{ color: '#4c1' }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="email" {...login} />
          {loading ? (
            <Button disabled>Carregando...</Button>
          ) : (
            <Button>Recuperar</Button>
          )}
        </form>
      )}
      {<Error>{error}</Error>}
    </section>
  );
};

export default LoginPasswordLost;
