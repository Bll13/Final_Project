import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type {  AddPost, Post, State } from './TypePost';
import * as api from './api';

const initialState: State = { posts: [], errPost: '' };

export const addPost = createAsyncThunk('post/add', (obj:FormData) => api.addPostFetch(obj));

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
      });
  },
});

export default addSlice.reducer;
