import ProtectedRoute from '@/components/atoms/protected-route';
import LoginCreate from '@/components/templates/login-create';
import LoginForm from '@/components/templates/login-form';
import Feed from '@/components/organisms/feed';
import UserPhotoPost from '@/components/templates/user-photo-post';
import UserStats from '@/components/templates/user-stats';
import Home from '@/pages/home';
import Login from '@/pages/login';
import User from '@/pages/user';
import React from 'react';
import { Route, Routes as RoutesDom } from 'react-router-dom';

const Routes: React.FC = () => {
  return (
    <RoutesDom>
      <Route path="/" element={<Home />} />
      <Route path="/login/" element={<Login />}>
        <Route path="" element={<LoginForm />}></Route>
        <Route path="criar" element={<LoginCreate />}></Route>
      </Route>
      <Route
        path="/conta/*"
        element={
          <ProtectedRoute>
            <User />
          </ProtectedRoute>
        }
      >
        <Route path="" element={<Feed />}></Route>
        <Route path="postar" element={<UserPhotoPost />}></Route>
        <Route path="estatisticas" element={<UserStats />}></Route>
      </Route>
    </RoutesDom>
  );
};

export default Routes;
