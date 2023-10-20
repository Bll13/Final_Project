import './App.css';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { initCardBuyMap, initEntityMap } from '../features/Map/mapSlice';
import { visualPost } from '../features/post/postSlice';

import { verification } from '../features/authc/authSlice';

import Registration from '../features/authc/Registration';
import Login from '../features/authc/Login';
import MainPage from '../features/mainPage/MainPage';
import Profile from '../features/profile/Profile';

import AddPost from '../features/profile/AddPost';
import PostList from '../features/post/PostList';
import PostPage from '../features/post/PostPage';

import EntiList from '../features/post/EntiList';


import { useAppDispatch } from '../store/store';
import NotFound from '../features/NotFound';


function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {


   

    dispatch(verification()).catch((err: string) => console.log(err));
    dispatch(visualPost()).catch((err: string) => console.log(err));
    dispatch(initEntityMap()).catch((err: string) => console.log(err));
    dispatch(initCardBuyMap()).catch((err: string) => console.log(err));

  }, []);

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/auth" element={<Registration />} />
      <Route path="/log" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/addPost" element={<AddPost />} />
      <Route path="/posts" element={<PostList />} />
      <Route path="/posts/:idPost" element={<PostPage />} />
      <Route path="/enti" element={<EntiList />} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  );






  
}

export default App;
