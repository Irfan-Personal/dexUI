import { dexApiInstance } from 'utils';

const API_VERSION = 'v1';

interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

export async function apiGetAvailableTokens() {
  const response: ResponseGenerator = await dexApiInstance.get(`/api/dex/${API_VERSION}/tokens/supported`);
  if (response)
    return response.data;
  return {};
}

export async function apiGetToken2TokenConversion(params: any) {
  const response: ResponseGenerator = await dexApiInstance.get(`/api/dex/${API_VERSION}/prices/convert/token`, {
    params,
  });
  if (response)
    return response.data;
  return {};
}

export async function apiGetToken2FiatConversion(params: any) {
  const response: ResponseGenerator = await dexApiInstance.get(`/api/dex/${API_VERSION}/prices/convert/fiat`, {
    params,
  });
  if (response)
    return response.data;
  return {};
}

export async function apiGetPopularPairings(params: any) {
  const response: ResponseGenerator = await dexApiInstance.get(`/api/dex/${API_VERSION}/tokens/popularPairings`, {
    params,
  });
  if (response)
    return response.data;
  return {};
}

export async function apiGetPriceImpact(params: any) {
  const response: ResponseGenerator = await dexApiInstance.get(`/api/dex/${API_VERSION}/prices/impact`, {
    params,
  });
  if (response)
    return response.data;
  return {};
}

export async function apiGetSlippageBounds(params: any) {
  const response: ResponseGenerator = await dexApiInstance.get(`/api/dex/${API_VERSION}/slippage-bounds`, {
    params,
  });
  if (response)
    return response.data;
  return {};
}

export async function apiGetPools(params: any) {
  const { offset = 0, limit = 10 } = params;
  const response: ResponseGenerator = await dexApiInstance.get(`/api/dex/${API_VERSION}/pools/available`, {
    params: {
      offset,
      limit
    },
  });
  if (response)
    return response.data;
  return {};
}

export async function apiGetStastics(params: any) {
  const { offset = 0, limit = 10, interval = 'day' } = params;
  const response: ResponseGenerator = await dexApiInstance.get(`/api/dex/${API_VERSION}/gettingStatistics`, {
    params: {
      offset,
      limit,
      interval,
    },
  });
  if (response)
    return response.data;
  return {};
}

export async function apiGetProposals(params: any) {
  const { offset = 0, limit = 10 } = params;
  const response: ResponseGenerator = await dexApiInstance.get(`/api/dex/${API_VERSION}/proposals`, {
    params: {
      offset,
      limit
    }
  });
  if (response)
    return response.data;
  return {};
}

export async function apiGetCertainProposal(params: any) {
  const { proposalId } = params;
  const response: ResponseGenerator = await dexApiInstance.get(`/api/dex/${API_VERSION}/proposals?proposalId=${proposalId}`);
  if (response)
    return response.data;
  return {};
}

export async function apiGetVotes(params: any) {
  const { address } = params;
  const response: ResponseGenerator = await dexApiInstance.get(`/api/dex/${API_VERSION}/votes`, {
    params: {
      voterAddress: address
    }
  });
  if (response)
    return response.data;
  return {};
}

export async function apiGetTopPoolsFromDatabase(data: any) {
  const response: ResponseGenerator = await dexApiInstance.get('/api/dex-information/v1/getTopPoolsFromDatabase', {
    params: data
  });
  if (response)
    return response.data;
  return {};
}

export async function apiGetTopTokensFromDatabase(data: any) {
  const response: ResponseGenerator = await dexApiInstance.get('/api/dex-information/v1/getTopTokensFromDatabase', {
    params: data
  });
  if (response)
    return response.data;
  return {};
}

export async function apiGetTransactionStatistics(data: any) {
  const response: ResponseGenerator = await dexApiInstance.get('/api/v3/transactions/statistics', {
    params: {
      interval: 'day',
      ...data,
    }
  });
  if (response)
    return response.data;
  return {};
}
