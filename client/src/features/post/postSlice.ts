import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PostBuyId, State } from './type';
import * as api from './api';

const initialState: State = { posts: [], errPost: '' };

export const visualPost = createAsyncThunk('post/init', () => api.loadPostFetch());
export const delPost = createAsyncThunk('post/del', (id: PostBuyId) => api.delFetch(Number(id)));

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(visualPost.fulfilled, (state, action) => {
        state.posts = action.payload.posts;
        state.errPost = '';
      })
      .addCase(visualPost.rejected, (state, action) => {
        state.errPost = action.error.message;
      })
      .addCase(delPost.fulfilled, (state, action) => {
        state.posts = state.posts.filter((el) => el.id !== action.payload.id);
        state.errPost = '';
      })
      .addCase(delPost.rejected, (state, action) => {
        state.errPost = action.error.message;
      });
  },
});

export default postSlice.reducer;
