import { apiGetPools, apiGetStastics, apiGetTopPoolsFromDatabase } from 'apis';
import { call, put } from 'redux-saga/effects';
import { AppActions } from 'store';

interface IResponse {
  data: unknown,
  meta: unknown,
  links: unknown,
}

export function* getPoolsSaga(action: any) {
  try {
    const result: IResponse = yield call(
      async () =>
        await apiGetPools(action.payload)
    );

    if (result) {
      yield put(AppActions.pool.getPoolsSuccess(result.data));
    }
  } catch (error) {
    yield put(AppActions.pool.getPoolsFailure(error));
  }
}

export function* getStasticsSaga(action: any) {
  try {
    const result: IResponse = yield call(
      async () =>
        await apiGetStastics(action.payload)
    );

    if (result) {
      yield put(AppActions.pool.getStasticsSuccess(result.data));
    }
  } catch (error) {
    yield put(AppActions.pool.getStasticsFailure(error));
  }
}

export function* getTopPoolsFromDatabaseSaga(action: any) {
  try {
    const result: IResponse = yield call(
      async () =>
        await apiGetTopPoolsFromDatabase(action.payload)
    );

    if (result) {
      yield put(AppActions.pool.getTopPoolsFromDatabaseSuccess(result.data));
    }
  } catch (error) {
    yield put(AppActions.pool.getTopPoolsFromDatabaseFailure(error));
  }
}
