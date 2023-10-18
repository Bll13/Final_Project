import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import authSlice from '../features/authc/authSlice';
import addSlice from '../features/profile/addSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    post: addSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
