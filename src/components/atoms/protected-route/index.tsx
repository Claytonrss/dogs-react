import { UserContext } from '@/context/UserContext';
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute: React.FC = ({ children }) => {
  const { login } = useContext(UserContext);

  return login ? <>{children}</> : <Navigate to="/login" />;
};

export default ProtectedRoute;
