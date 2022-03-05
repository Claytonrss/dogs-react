import { PASSWORD_RESET_POST } from '@/api/index';
import Button from '@/components/atoms/button';
import Error from '@/components/atoms/error';
import Heading from '@/components/atoms/heading';
import Input from '@/components/atoms/input';
import useFetch from '@/hooks/useFetch';
import useForm from '@/hooks/useForm';
import React, { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPasswordReset: React.FC = () => {
  const [login, setLogin] = useState('');
  const [key, setKey] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get('key');
    const login = params.get('login');
    if (key) setKey(key);
    if (login) setLogin(login);
  }, [login, key]);

  const password = useForm('password');
  const { error, loading, request } = useFetch();
  const navigate = useNavigate();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (password.validate()) {
      const { url, options } = PASSWORD_RESET_POST({
        login,
        key,
        password: password.value,
      });
      const { response } = await request(url, options);
      if (response && response.ok) {
        navigate('/login');
      }
    }
  }

  return (
    <section>
      <Heading tag="h1">Reset a senha</Heading>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nova senha:"
          type="password"
          name="password"
          {...password}
        />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Resetar</Button>
        )}
      </form>
      <Error>{error}</Error>
    </section>
  );
};

export default LoginPasswordReset;
