import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { State, UserLogin, UserWithoutId } from './type';
import * as api from './api';

const initialState: State = { user: null, errUser: '' };

export const registgation = createAsyncThunk('auth/registration', (obj: UserWithoutId) =>
  api.registrationFetch(obj),
);
export const verification = createAsyncThunk('auth/verification', () => api.verificationFetch());
export const loginThunk = createAsyncThunk('auth/login', (obj: UserLogin) => api.loginFetch(obj));
export const delThunk=createAsyncThunk('auth/logout', ()=> api.logoutFetch())

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    messageErr:(state)=>{state.errUser='Пароли не совпадают'}
  },
  extraReducers: (builder) => {
    builder

      .addCase(registgation.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.errUser = '';
      })
      .addCase(registgation.rejected, (state, action) => {
        state.errUser = action.error.message;
      })

      .addCase(verification.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.errUser = '';
      })
      .addCase(verification.rejected, (state, action) => {
        state.errUser = action.error.message;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.errUser = '';
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.errUser = action.error.message;
      })
  
  },
});
export const { messageErr } = authSlice.actions;
export default authSlice.reducer;
