import { INetwrokFeeRequestBody } from 'models';
import { dexApiInstance, liskApiInstance } from 'utils';

const API_VERSION = 'v3';

interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

export async function apiGeLegacyAccount(params: any) {
  const response: ResponseGenerator = await liskApiInstance.get(`/api/${API_VERSION}/legacy`, {
    params,
  });
  if (response)
    return response.data;
  return {};
}

export async function apiGetChainTokens(params: any) {
  const response: ResponseGenerator = await dexApiInstance.get('/api/v3/blockchain/apps/meta/tokens', {
    params
  });
  if (response)
    return response.data;
  return {};
}

export async function apiGetTokenBalances(params: any) {
  const response: ResponseGenerator = await dexApiInstance.get('/api/v3/token/balances', {
    params
  });
  if (response)
    return response.data;
  return {};
}

export async function apiSubmitTransaction(data: any) {
  const response: ResponseGenerator = await dexApiInstance.post('/api/v3/transactions', data);
  if (response)
    return response.data;
  return {};
}

export async function apiGetTransactions(data: any) {
  const response: ResponseGenerator = await dexApiInstance.get('/api/v3/transactions', {
    params: data
  });
  if (response)
    return response.data;
  return {};
}

export async function apiGetAuth(data: any) {
  const response: ResponseGenerator = await dexApiInstance.get('/api/v3/auth', {
    params: data
  });
  if (response)
    return response.data;
  return {};
}

export async function apiGetEstimationFee(data: INetwrokFeeRequestBody) {
  const response: ResponseGenerator = await dexApiInstance.post('/api/v3/transactions/estimate-fees', data);
  if (response)
    return response.data;
  return {};
}

export async function apiGetMarketPrices() {
  const response: ResponseGenerator = await dexApiInstance.get('/api/v3/market/prices');
  if (response)
    return response.data;
  return {};
}