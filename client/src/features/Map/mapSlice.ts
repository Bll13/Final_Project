import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { State } from './type';
import * as api from './api';

const initialState: State = { maps: [], errMaps: '' };

export const initMap = createAsyncThunk('map/init', () => api.locationFetch());
// export const addAdres=createAsyncThunk('map/post', ()=>)

const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(initMap.fulfilled, (state, action) => {
        state.maps = action.payload.marcers;
        state.errMaps = '';
      })
      .addCase(initMap.rejected, (state, action) => {
        state.errMaps = action.error.message;
      });
  },
});

export default mapSlice.reducer;
