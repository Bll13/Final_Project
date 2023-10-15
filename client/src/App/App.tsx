import React from 'react';

import './App.css';

import { Route, Routes } from 'react-router-dom';
import Registration from '../features/authc/Registration';

import Login from '../features/authc/Login';
import MainPage from '../features/mainPage/MainPage';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path='/' element={<MainPage/>} />
      <Route path="/auth" element={<Registration />} />
      <Route path="/log" element={<Login />} />
    </Routes>
  );
}

export default App;
