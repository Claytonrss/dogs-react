import React, { FormEvent, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../context/UserContext';
import useForm from '../../../hooks/useForm';
import Button from '../../atoms/button';
import Error from '../../atoms/error';
import Heading from '../../atoms/heading';
import Input from '../../atoms/input';
import { Container } from './styles';

const LoginForm: React.FC = () => {
  const username = useForm('notEmpty');
  const password = useForm('notEmpty');

  const { userLogin, error, loading } = useContext(UserContext);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      await userLogin(username.value, password.value);
    }
  }

  return (
    <Container className="animeLeft">
      <Heading tag="h5">Login</Heading>
      <form action="" onSubmit={handleSubmit}>
        <Input type="text" label="Usuário" name="username" {...username} />
        {username.value}
        <Input type="password" label="Senha" name="password" {...password} />
        {password.value}
        {loading ? (
          <Button disabled>Carregando</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error>{error}</Error>
      </form>
      <Link to="/login/perdeu" className="last-password">
        Perdeu a senha?
      </Link>
      <div className="sign-up">
        <Heading tag="h2">Cadastre-se</Heading>
        <p>Ainda não possui conta? Cadastre-se no site</p>
        <Button>
          <Link to="/login/criar">Cadastro</Link>
        </Button>
      </div>
    </Container>
  );
};

export default LoginForm;
