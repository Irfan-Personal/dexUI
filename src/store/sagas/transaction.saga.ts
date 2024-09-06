import { PayloadAction } from '@reduxjs/toolkit';
import { apiGetEstimationFee, apiGetTransactions, apiSubmitTransaction } from 'apis';
import { INetwrokFeeRequestBody, INetwrokFeeResponse } from 'models';
import { call, put } from 'redux-saga/effects';
import { AppActions } from 'store';

interface IResponse {
  data: unknown,
  meta: unknown,
  links: unknown,
}

export function* submitTransactionSaga(action: any) {
  try {
    const result: IResponse = yield call(
      async () =>
        await apiSubmitTransaction(action.payload)
    );

    if (result) {
      yield put(AppActions.transaction.submitTransactionSuccess(result));
    }
  } catch (error: any) {
    yield put(AppActions.transaction.submitTransactionFailure(error.response.data));
  }
}

export function* getTransactionsSaga(action: any) {
  const { next, ...params } = action.payload;
  try {
    const result: IResponse = yield call(
      async () =>
        await apiGetTransactions(params)
    );

    if (result) {
      if (result.data && next)
        next(result.data);
      yield put(AppActions.transaction.getTransactionsSuccess(result));
    }
  } catch (error: any) {
    yield put(AppActions.transaction.getTransactionsFailure(error.response.data));
  }
}

export function* getNetworkFeeSaga(action: PayloadAction<INetwrokFeeRequestBody>) {
  try {
    const result: INetwrokFeeResponse = yield call(
      async () =>
        await apiGetEstimationFee(action.payload)
    );

    if (result) {
      yield put(AppActions.transaction.getNetworkFeeSuccess(+result.data.transaction.fee.minimum));
    }
  } catch (error) {
    yield put(AppActions.transaction.getNetworkFeeFailure(error));
  }
}