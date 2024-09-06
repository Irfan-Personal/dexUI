import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {
  transactionActions,
  transactionReducer,
  proposalActions,
  proposalReducer,
  poolReducer,
  poolActions,
  walletReducer,
  walletActions,
  tokenReducer,
  tokenActions
} from './slices';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  transaction: transactionReducer,
  proposal: proposalReducer,
  pool: poolReducer,
  wallet: walletReducer,
  token: tokenReducer,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false, thunk: false })
      .concat(sagaMiddleware)
});

export const AppActions = {
  transaction: transactionActions,
  proposal: proposalActions,
  pool: poolActions,
  wallet: walletActions,
  token: tokenActions,
};

sagaMiddleware.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
