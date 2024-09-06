import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAccount } from 'models';

type StateType = {
  account: IAccount | null,
  error: any,
};

const initialState: StateType = {
  account: null,
  error: { message: '' },
};

const walletSlice = createSlice({
  name: 'wallet',
  initialState: initialState,
  reducers: {
    /**
     * wallet
     */
    setAccount(state, action: PayloadAction<IAccount>) {
      state.account = action.payload;
    },

    resetWalletState(state) {
      state.account = null;
    }
  },
});

export const actions = walletSlice.actions;
export const reducer = walletSlice.reducer;
