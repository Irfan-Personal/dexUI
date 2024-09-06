import { createSlice } from '@reduxjs/toolkit';

type StateType = {
  error: any,
};

const initialState: StateType = {
  error: { message: '' },
};

const swapSlice = createSlice({
  name: 'swap',
  initialState: initialState,
  reducers: {
    /**
     * swap
     */
  },
});

export const actions = swapSlice.actions;
export const reducer = swapSlice.reducer;

