import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from '@/api/index';
import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContextInterface, UserInterface } from './types';

export const UserContext = createContext<UserContextInterface>(
  {} as UserContextInterface
);

export const UserStorage: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserInterface | null>({} as UserInterface);
  const [login, setLogin] = useState<boolean | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem('token');
      if (token) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          if (!response.ok) throw new Error('Token inválido');
          const json = await response.json();
          await getUser(token);
        } catch (error) {
          userLogout();
        } finally {
          setLoading(false);
        }
      } else {
        setLogin(false);
      }
    }
    autoLogin();
  }, []);

  async function getUser(token: string) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setUser(json);
    setLogin(true);
  }

  async function userLogin(username: string, password: string) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({ username, password });
      const response = await fetch(url, options);
      if (!response.ok) throw new Error(`Erro: ${response.statusText}`);
      const json = await response.json();
      window.localStorage.setItem('token', json.token);
      await getUser(json.token);
      navigate('/conta');
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  }

  async function userLogout() {
    setUser(null);
    setError(null);
    setLoading(false);
    setLogin(false);
    window.localStorage.removeItem('token');
    navigate('/login');
  }

  return (
    <UserContext.Provider
      value={{ user, userLogin, userLogout, error, loading, login }}
    >
      {children}
    </UserContext.Provider>
  );
};
