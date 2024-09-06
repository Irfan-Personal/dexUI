import { PayloadAction } from '@reduxjs/toolkit';
import {
  apiGetChainTokens,
  apiGetAvailableTokens,
  apiGetPopularPairings,
  apiGetPriceImpact,
  apiGetSlippageBounds,
  apiGetToken2FiatConversion,
  apiGetToken2TokenConversion,
  apiGetTopTokensFromDatabase,
  apiGetTokenBalances,
  apiGetMarketPrices
} from 'apis';
import {
  IFilteredTokens,
  IMarketPriceResponse,
  IResponse,
  ITokenBalancesReponse,
  ITokenBalancesRequest,
  ITopTokensFromDatabaseReponse,
  ITopTokensFromDatabaseRequest
} from 'models';
import { call, put } from 'redux-saga/effects';
import { AppActions } from 'store';

export function* getAvailableTokensSaga() {
  try {
    const result: IResponse = yield call(
      async () =>
        await apiGetAvailableTokens()
    );

    if (result) {
      yield put(AppActions.token.getAvailableTokensSuccess(result.data));
    }
  } catch (error) {
    yield put(AppActions.token.getAvailableTokensFailure(error));
  }
}

export function* getAccountTokensSaga(action: any) {
  try {
    const result: IResponse = yield call(
      async () =>
        await apiGetChainTokens(action.payload)
    );

    if (result) {
      yield put(AppActions.token.getAccountTokensSuccess(result.data));
    }
  } catch (error) {
    yield put(AppActions.token.getAccountTokensFailure(error));
  }
}

export function* getToken2TokenConversionSaga(action: any) {
  try {
    const result: IResponse = yield call(
      async () =>
        await apiGetToken2TokenConversion(action.payload)
    );

    if (result) {
      const { credibleDirectPriceToken2ToToken1 } = result.data as any;
      yield put(AppActions.token.getToken2TokenCoversionSuccess({
        ...action.payload,
        credibleDirectPriceToken2ToToken1,
      }));
    }
  } catch (error) {
    yield put(AppActions.token.getToken2TokenCoversionFailure(error));
  }
}

export function* getToken2FiatConversionSaga(action: any) {
  const { tokenSymbol } = action.payload;

  try {
    const result: IResponse = yield call(
      async () =>
        await apiGetToken2FiatConversion(action.payload)
    );

    if (result) {
      const { convertedPrice, convertedTarget } = result.data as any;
      yield put(AppActions.token.getToken2FiatConversionSuccess({
        tokenSymbol,
        convertedTarget,
        convertedPrice,
      }));
    }
  } catch (error) {
    yield put(AppActions.token.getToken2FiatConversionFailure(error));
  }
}

export function* getPopularPairingsSaga(action: any) {
  try {
    const result: IResponse = yield call(
      async () =>
        await apiGetPopularPairings(action.payload)
    );

    if (result) {
      yield put(AppActions.token.getPopularPairingsSuccess(result));
    }
  } catch (error) {
    yield put(AppActions.token.getPopularPairingsFailure(error));
  }
}

export function* getPriceImpactSaga(action: any) {
  try {
    const result: IResponse = yield call(
      async () =>
        await apiGetPriceImpact(action.payload)
    );

    if (result) {
      yield put(AppActions.token.getPriceImpactSuccess(result));
    }
  } catch (error) {
    yield put(AppActions.token.getPriceImpactFailure(error));
  }
}

export function* getSlippageBoundsSaga(action: any) {
  try {
    const result: IResponse = yield call(
      async () =>
        await apiGetSlippageBounds(action.payload)
    );

    if (result) {
      yield put(AppActions.token.getSlippageBoundsSuccess(result));
    }
  } catch (error) {
    yield put(AppActions.token.getSlippageBoundsFailure(error));
  }
}

export function* getTopTokensFromDatabaseSaga(action: PayloadAction<ITopTokensFromDatabaseRequest>) {
  try {
    const result: ITopTokensFromDatabaseReponse = yield call(
      async () =>
        await apiGetTopTokensFromDatabase(action.payload)
    );

    if (result.data) {
      const { topTokensFromDatabase } = result.data;

      const { tokenID } = action.payload;
      if (!tokenID)
        yield put(AppActions.token.getTopTokensFromDatabaseSuccess(topTokensFromDatabase));
      else {
        const { filteredTokens } = topTokensFromDatabase[0] as IFilteredTokens;
        yield put(AppActions.token.getTokenDetailFromDatabaseSuccess(filteredTokens[0]));
      }
    }
  } catch (error) {
    yield put(AppActions.token.getTopTokensFromDatabaseFailure(error));
  }
}

export function* getTokenBalancesSaga(action: PayloadAction<ITokenBalancesRequest>) {
  try {
    const result: ITokenBalancesReponse = yield call(
      async () =>
        await apiGetTokenBalances(action.payload)
    );

    if (result.data) {
      yield put(AppActions.token.getTokenBalancesSuccess(result.data));
    }
  } catch (error) {
    yield put(AppActions.token.getTopTokensFromDatabaseFailure(error));
  }
}

// eslint-disable-next-line
export function* getMarketPricesSaga(action: any) {
  try {
    const result: IMarketPriceResponse = yield call(
      async () =>
        await apiGetMarketPrices()
    );

    if (result.data) {
      yield put(AppActions.token.getMarketPricesSuccess(result.data));
    }
  } catch (error) {
    yield put(AppActions.token.getMarketPricesFailure(error));
  }
}