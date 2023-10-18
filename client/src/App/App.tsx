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
import PostList from '../features/post/PostList';
import PostPage from '../features/post/PostPage';
import MapClir from '../features/Map/MapClir';
import { initCardBuyMap, initEntityMap } from '../features/Map/mapSlice';
import { visualPost } from '../features/post/postSlice';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(verification()).catch((err) => console.log(err));
    dispatch(visualPost()).catch((err) => console.log(err));
    dispatch(initEntityMap()).catch((err) => console.log(err));
    dispatch(initCardBuyMap()).catch((err) => console.log(err));
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
      <Route path="/map" element={<MapClir />} />
    </Routes>
  );
}

export default App;
