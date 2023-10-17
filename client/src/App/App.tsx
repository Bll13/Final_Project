import React, { useEffect } from 'react';

import './App.css';

import { Route, Routes } from 'react-router-dom';
import Registration from '../features/authc/Registration';

import Login from '../features/authc/Login';
import MainPage from '../features/mainPage/MainPage';
import PostList from '../features/post/PostList';
import PostPage from '../features/post/PostPage';
import { useAppDispatch } from '../store/store';
import { visualPost } from '../features/post/postSlice';



function App(): JSX.Element {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(visualPost()).catch((err) => console.log(err));
  }, []);


  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/auth" element={<Registration />} />
      <Route path="/log" element={<Login />} />
      <Route path="/posts" element={<PostList />} />
      <Route path="/posts/:idPost" element={<PostPage />} />
    </Routes>
  );
}

export default App;
