import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { EntitiAdd, State } from './TypePost';
import * as api from './api';

const initialState: State = { posts: [], errPost: '', enti: [] };


export const addEnti = createAsyncThunk('post/add', (obj: EntitiAdd) => api.addEntiFetch(obj));

export const addPost = createAsyncThunk('post/add', (obj: FormData) => api.addPostFetch(obj));

const addSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(addPost.fulfilled, (state, action) => {
        state.posts.push(action.payload.newPost);
        state.errPost = '';
      })
      .addCase(addPost.rejected, (state, action) => {
        state.errPost = action.error.message;
      })

      .addCase(addEnti.fulfilled, (state, action) => {
        state.enti.push(action.payload.enti);
        state.errPost = '';
      })
      .addCase(addEnti.rejected, (state, action) => {
        state.errPost = action.error.message;
      });
  },
});

export default addSlice.reducer;
