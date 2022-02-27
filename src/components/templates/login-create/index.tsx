import React, { FormEvent, useContext } from 'react';
import { USER_POST } from '@/api/index';
import { UserContext } from '@/context/UserContext';
import useFetch from '@/hooks/useFetch';
import useForm from '@/hooks/useForm';
import Button from '@/components/atoms/button';
import Error from '@/components/atoms/error';
import Heading from '@/components/atoms/heading';
import Input from '@/components/atoms/input';
import { Container } from './styles';

const LoginCreate: React.FC = () => {
  const username = useForm('username');
  const email = useForm('email');
  const password = useForm('password');

  const { userLogin } = useContext(UserContext);
  const { request, loading, error } = useFetch();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (username.validate() && email.validate() && password.validate()) {
      const { url, options } = USER_POST({
        username: username.value,
        email: email.value,
        password: password.value,
      });
      const { response, json } = await request(url, options);
      if (response?.ok) {
        userLogin(username.value, password.value);
      }
    }
  }
  return (
    <Container className="animeLeft">
      <Heading tag="h1">Cadastre-se</Heading>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        {error && <Error>{error}</Error>}
      </form>
    </Container>
  );
};

export default LoginCreate;
