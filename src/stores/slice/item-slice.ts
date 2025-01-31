import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { ItemsState } from '../types/slices';

const initialState: ItemsState = {
  list: [],
  loading: false,
  error: null,
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    fetchItemsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchItemsSuccess(state, action: PayloadAction<string[]>) {
      state.list = action.payload;
      state.loading = false;
    },
    fetchItemsFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { fetchItemsStart, fetchItemsSuccess, fetchItemsFailure } =
  itemsSlice.actions;

export default itemsSlice.reducer;
