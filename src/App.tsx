import Footer from '@/components/organisms/footer';
import Header from '@/components/organisms/header';
import LoginCreate from '@/components/templates/login-create';
import LoginForm from '@/components/templates/login-form';
import UserAccount from '@/components/templates/user-account';
import { UserStorage } from '@/context/UserContext';
import Home from '@/pages/home';
import Login from '@/pages/login';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/atoms/protected-route';

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
          <Route
            path="/conta/"
            element={
              <ProtectedRoute>
                <UserAccount />
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
        <Footer />
      </UserStorage>
    </BrowserRouter>
  );
};

export default App;
