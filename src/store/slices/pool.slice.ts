import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPool, IPoolDetail } from 'models';

type StateType = {
  pools: IPool[],
  gettingPools: boolean,
  gotPools: boolean,

  poolDetails: IPoolDetail[],
  gettingPoolDetails: boolean,
  gotPoolDetails: boolean,

  poolIDs: any,

  stastics: any,
  gettingStastics: boolean,
  gotStastics: boolean,
  error: any,
};

const initialState: StateType = {
  pools: [],
  gettingPools: false,
  gotPools: false,

  poolDetails: [],
  gettingPoolDetails: false,
  gotPoolDetails: false,

  poolIDs: [],

  stastics: {},
  gettingStastics: false,
  gotStastics: false,

  error: { message: '' },
};

const poolSlice = createSlice({
  name: 'pool',
  initialState: initialState,
  reducers: {
    /**
     * pool
     */

    //get pools
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getPools(state, action) {
      state.gettingPools = true;
      state.gotPools = false;
    },
    getPoolsSuccess(state, action) {
      state.gettingPools = false;
      state.gotPools = true;
      state.poolIDs = [...action.payload.poolsAvailable.poolsAvailable],
      state.pools = [];
    },
    getPoolsFailure(state, action: PayloadAction<any>) {
      state.gettingPools = false;
      state.gotPools = false;
      state.error = action.payload;
    },

    //get stastics
    //eslint-disable-next-line  @typescript-eslint/no-unused-vars
    getStastics(state, action) {
      state.gettingStastics = true;
      state.gotStastics = false;
    },
    getStasticsSuccess(state, action) {
      state.gettingStastics = true;
      state.gotStastics = false;
      state.stastics = action.payload.data;
    },
    getStasticsFailure(state, action) {
      state.gettingStastics = true;
      state.gotStastics = false;
      state.error = action.payload;
    },

    //get stastics
    //eslint-disable-next-line  @typescript-eslint/no-unused-vars
    getTopPoolsFromDatabase(state, action) {
      state.gettingPoolDetails = true;
      state.gotPoolDetails = false;
    },
    getTopPoolsFromDatabaseSuccess(state, action) {
      state.gettingPoolDetails = false;
      state.gotPoolDetails = true;
      state.poolDetails = [...action.payload.topPoolsFromDatabase];
    },
    getTopPoolsFromDatabaseFailure(state, action) {
      state.gettingPoolDetails = false;
      state.gotPoolDetails = false;
      state.error = action.payload;
    }
  },
});

export const actions = poolSlice.actions;
export const reducer = poolSlice.reducer;

