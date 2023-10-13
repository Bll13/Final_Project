import React from 'react';

import './App.css';
import { Route, Routes } from 'react-router-dom';
import Registration from '../features/authc/Registration';
import Login from '../features/authc/Login';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/auth" element={<Registration />} />
      <Route path="/log" element={<Login />} />
    </Routes>
    // <div>
    //   <Registration/>
    // </div>
  );
}

export default App;
