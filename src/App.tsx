import Footer from '@/components/organisms/footer';
import Header from '@/components/organisms/header';
import { UserStorage } from '@/context/UserContext';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from '@/routes/index';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="AppBody">
            <Routes />
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;
