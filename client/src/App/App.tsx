import './App.css';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { initCardBuyMap, initEntityMap } from '../features/Map/mapSlice';
import { visualPost } from '../features/post/postSlice';
import { useAppDispatch } from '../store/store';
import { verification } from '../features/authc/authSlice';

import Registration from '../features/authc/Registration';
import Login from '../features/authc/Login';
import MainPage from '../features/mainPage/MainPage';
import PostList from '../features/post/PostList';
import PostPage from '../features/post/PostPage';
import MapClir from '../features/Map/MapClir';

import EntiList from '../features/post/EntiList';

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
      <Route path="/posts" element={<PostList />} />
      <Route path="/posts/:idPost" element={<PostPage />} />
      <Route path="/map" element={<MapClir />} />
      <Route path="/enti" element={<EntiList />} />
    </Routes>
  );
}

export default App;
