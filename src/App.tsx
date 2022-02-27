import Footer from '@/components/organisms/footer';
import Header from '@/components/organisms/header';
import { UserStorage } from '@/context/UserContext';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from '@/routes/index';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <UserStorage>
        <Routes />
        <Header />
        <Footer />
      </UserStorage>
    </BrowserRouter>
  );
};

export default App;
