import React from 'react';

import './App.css';
import { Route, Routes } from 'react-router-dom';
import Registration from '../features/authc/Registration';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path='/auth' element={<Registration/>}>
      </Route>
    </Routes>
  )
}

export default App;
