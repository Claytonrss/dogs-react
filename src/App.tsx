import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/organisms/footer';
import Header from './components/organisms/header';
import LoginCreate from './components/templates/login-create';
import LoginForm from './components/templates/login-form';
import { UserStorage } from './context/UserContext';
import Home from './pages/home';
import Login from './pages/login';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/" element={<Login />}>
            <Route path="" element={<LoginForm />}></Route>
            <Route path="criar" element={<LoginCreate />}></Route>
          </Route>
        </Routes>
        <Footer />
      </UserStorage>
    </BrowserRouter>
  );
};

export default App;
