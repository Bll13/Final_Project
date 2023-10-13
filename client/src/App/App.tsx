import React from 'react';

import './App.css';
import { Route, Routes } from 'react-router-dom';
import Registration from '../features/authc/Registration';
import MainPage from '../features/mainPage/MainPage';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path='/auth' element={<Registration/>}/>
      <MainPage/>
      
    </Routes>
    
  )
}

export default App;
