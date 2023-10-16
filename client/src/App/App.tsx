import React, { useEffect } from 'react';

import './App.css';

import { Route, Routes } from 'react-router-dom';
import Registration from '../features/authc/Registration';

import Login from '../features/authc/Login';
import MainPage from '../features/mainPage/MainPage';
import MapClir from '../features/Map/MapClir';
import { useAppDispatch } from '../store/store';
import { initMap } from '../features/Map/mapSlice';


function App(): JSX.Element {

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(initMap()).catch((err) => console.log(err));
  }, []);
  return (
    <Routes>
      <Route path='/' element={<MainPage/>} />
      <Route path="/auth" element={<Registration />} />
      <Route path="/log" element={<Login />} />
      <Route path="/map" element={<MapClir />} />
    </Routes>
  );
}

export default App;
