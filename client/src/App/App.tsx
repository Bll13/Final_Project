import React, { useEffect } from 'react';

import './App.css';

import { Route, Routes } from 'react-router-dom';
import Registration from '../features/authc/Registration';

import Login from '../features/authc/Login';
import MainPage from '../features/mainPage/MainPage';
import MapClir from '../features/Map/MapClir';
import { useAppDispatch } from '../store/store';
import { initCardBuyMap, initEntityMap } from '../features/Map/mapSlice';
import TestMapOnClick from '../features/Map/TestMapOnClick';


function App(): JSX.Element {

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(initEntityMap()).catch((err) => console.log(err));
    dispatch(initCardBuyMap()).catch((err) => console.log(err));
  }, []);
  return (
    <Routes>
      <Route path='/' element={<MainPage/>} />
      <Route path="/auth" element={<Registration />} />
      <Route path="/log" element={<Login />} />
      <Route path="/map" element={<MapClir/>} />
      <Route path="/map3" element={<TestMapOnClick/>} />

    </Routes>
  );
}

export default App;
