import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import UserPage from './pages/UserPage';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
    </div>
  );
};

export default App;
