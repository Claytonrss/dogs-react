import ProtectedRoute from '@/components/atoms/protected-route';
import LoginCreate from '@/components/templates/login-create';
import LoginForm from '@/components/templates/login-form';
import Feed from '@/components/organisms/feed';
import UserPhotoPost from '@/components/templates/user-photo-post';
import UserStats from '@/components/templates/user-stats';
import Home from '@/pages/home';
import Login from '@/pages/login';
import User from '@/pages/user';
import React, { useContext } from 'react';
import { Route, Routes as RoutesDom } from 'react-router-dom';
import { UserContext } from '@/context/UserContext';
import Photo from '@/pages/photo';
import Profile from '@/pages/profile';

const Routes: React.FC = () => {
  const { user } = useContext(UserContext);

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
        <Route path="" element={<Feed userID={user?.id} />}></Route>
        <Route path="postar" element={<UserPhotoPost />}></Route>
        <Route path="estatisticas" element={<UserStats />}></Route>
      </Route>
      <Route path="foto/:id" element={<Photo />} />
      <Route path="perfil/:user" element={<Profile />} />
    </RoutesDom>
  );
};

export default Routes;
