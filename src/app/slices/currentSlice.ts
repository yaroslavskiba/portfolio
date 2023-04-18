import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = '';

const currentSlice = createSlice({
  name: 'current page',
  initialState,
  reducers: {
    addCurrent: (_state, action: PayloadAction<string>) => {
      return action.payload;
    },
  },
});

export const { addCurrent } = currentSlice.actions;
export default currentSlice.reducer;
