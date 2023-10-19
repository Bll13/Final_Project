import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import authSlice from '../features/authc/authSlice';
import postSlice from '../features/post/postSlice';
import mapSlice from '../features/Map/mapSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    posts: postSlice,
    map: mapSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
