import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { Post, State } from './type';
import * as api from './api';

const initialState: State = { enti: [], card: [], errMaps: '' };

export const initEntityMap = createAsyncThunk('map/initEntity', () => api.entityFetch());
export const initCardBuyMap = createAsyncThunk('map/initCardBuy', () => api.cardBuyFetch());
export const addCardBuy = createAsyncThunk('map/postCardBuy', (obj: Post) => api.postAdresFetch(obj));

const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    delMap : (state, action) => {state.card = state.card.filter((el) =>{
    return  el.id !== action.payload})}
    
  },
  extraReducers: (builder) => {
    builder

      .addCase(initEntityMap.fulfilled, (state, action) => {
        state.enti = action.payload.enti;
        state.errMaps = '';
      })
      .addCase(initEntityMap.rejected, (state, action) => {
        state.errMaps = action.error.message;
      })
      .addCase(initCardBuyMap.fulfilled, (state, action) => {
        state.card = action.payload.card;
        state.errMaps = '';
      })
      .addCase(initCardBuyMap.rejected, (state, action) => {
        state.errMaps = action.error.message;
      })
    .addCase(addCardBuy.fulfilled, (state, action) => {
      state.card.push(action.payload.postCardBuy);
      state.errMaps = '';
    })
    .addCase(addCardBuy.rejected, (state, action) => {
      state.errMaps = action.error.message;
    });
  },
});
export const { delMap } = mapSlice.actions;
export default mapSlice.reducer;
