import HeaderUser from '@/components/organisms/header-user';
import React from 'react';
import { Outlet } from 'react-router-dom';

const User: React.FC = () => {
  return (
    <section className="container">
      <HeaderUser />
      <Outlet />
    </section>
  );
};

export default User;
