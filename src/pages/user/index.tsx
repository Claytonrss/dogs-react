import Head from '@/components/atoms/head';
import HeaderUser from '@/components/organisms/header-user';
import React from 'react';
import { Outlet } from 'react-router-dom';

const User: React.FC = () => {
  return (
    <>
      <Head title={'Minha Conta'} description="Minha Conta" />
      <section className="container">
        <HeaderUser />
        <Outlet />
      </section>
    </>
  );
};

export default User;
