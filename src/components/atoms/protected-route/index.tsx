import { UserContext } from '@/context/UserContext';
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import Loading from '../loading';

const ProtectedRoute: React.FC = ({ children }) => {
  const { login, loading } = useContext(UserContext);

  if (login === null || loading === true) {
    return <Loading />;
  }

  return login ? <>{children}</> : <Navigate to="/login" />;
};

export default ProtectedRoute;
