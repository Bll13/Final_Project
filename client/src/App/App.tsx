import React, { useEffect } from 'react';

import './App.css';

import { Route, Routes } from 'react-router-dom';
import Registration from '../features/authc/Registration';

import Login from '../features/authc/Login';
import MainPage from '../features/mainPage/MainPage';
import Profile from '../features/profile/Profile';
import { verification } from '../features/authc/authSlice';
import { useAppDispatch } from '../store/store';
import AddPost from '../features/profile/AddPost';


function App(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(verification()).catch((err) => console.log(err));
  }, []);


  
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/auth" element={<Registration />} />
      <Route path="/log" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path='/addPost' element={<AddPost/>}/>
    </Routes>
  );
}

export default App;
