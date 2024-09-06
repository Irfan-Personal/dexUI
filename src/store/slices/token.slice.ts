import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ConversionRates, IPrice, IToken, ITokenBalance, ITokenBalancesRequest, ITokenDetail } from 'models';

type StateType = {
  gettingAvailableTokens: boolean,
  gotAvailableTokens: boolean,
  availableTokens: IToken[],

  gettingAccountTokens: boolean,
  gotAccountTokens: boolean,
  accountTokens: IToken[],

  gettingToken2TokenConversion: boolean,
  gotToken2TokenConversion: boolean,

  gettingToken2FiatConversion: boolean,
  gotToken2FiatConversion: boolean,

  gettingTopTokensFromDatabase: boolean,
  gotTopTokensFromDatabase: boolean,

  tokenDetails: ITokenDetail[],
  tokenDetail: ITokenDetail,

  conversionRates: ConversionRates,

  gettingPopularPairings: boolean,
  gotPopularPairings: boolean,
  popularPairings: string[],

  gettingTokenBalances: boolean,
  gotTokenBalances: boolean,
  tokenBalances: ITokenBalance[],

  gettingMarketPrices: boolean,
  gotMarketPrices: boolean,

  error: any,
};

const initialState: StateType = {
  gettingAvailableTokens: false,
  gotAvailableTokens: false,
  availableTokens: [],

  gettingAccountTokens: false,
  gotAccountTokens: false,
  accountTokens: [],

  gettingToken2TokenConversion: false,
  gotToken2TokenConversion: false,

  gettingToken2FiatConversion: false,
  gotToken2FiatConversion: false,

  gettingTopTokensFromDatabase: false,
  gotTopTokensFromDatabase: false,

  gettingTokenBalances: false,
  gotTokenBalances: false,
  tokenBalances: [],

  gettingMarketPrices: false,
  gotMarketPrices: false,

  tokenDetails: [],
  tokenDetail: {
    name: '',
    price: 0,
    priceChange: 0,
    volume24H: 0,
    liquidity: 0,
    tokenID: '',
    symbol: '',
  },

  conversionRates: {
    LSK: {
      USD: 0.8863,
      DEX: 0.1,
    },
    DEX: {
      USD: 0.0886
    }
  },

  gettingPopularPairings: false,
  gotPopularPairings: false,
  popularPairings: [],

  error: { message: '' },
};

const tokenSlice = createSlice({
  name: 'token',
  initialState: initialState,
  reducers: {
    /**
     * available tokens
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getAvailableTokens(state) {
      state.gettingAvailableTokens = true;
      state.gotAvailableTokens = false;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getAvailableTokensSuccess(state, action) {
      state.gettingAvailableTokens = false;
      state.gotAvailableTokens = true;
      state.availableTokens = [...action.payload];
    },
    getAvailableTokensFailure(state, action) {
      state.gettingAvailableTokens = false;
      state.gotAvailableTokens = false;
      state.error = action.payload;
    },

    /**
     * account tokens
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getAccountTokens(state, action) {
      state.gettingAccountTokens = true;
      state.gotAccountTokens = false;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getAccountTokensSuccess(state, action) {
      state.gettingAccountTokens = false;
      state.gotAccountTokens = true;
      state.accountTokens = [...action.payload];
    },
    getAccountTokensFailure(state, action) {
      state.gettingAccountTokens = false;
      state.gotAccountTokens = false;
      state.error = action.payload;
    },

    /**
     * token to token conversion
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getToken2TokenCoversion(state, action) {
      state.gettingToken2TokenConversion = true;
      state.gotToken2TokenConversion = false;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getToken2TokenCoversionSuccess(state, action) {
      state.gettingToken2TokenConversion = false;
      state.gotToken2TokenConversion = true;
      const { tokenSymbol, conversionTokenSymbol, credibleDirectPriceToken2ToToken1 } = action.payload;
      state.conversionRates[tokenSymbol][conversionTokenSymbol] = credibleDirectPriceToken2ToToken1 || 0;
    },
    getToken2TokenCoversionFailure(state, action) {
      state.gettingToken2TokenConversion = false;
      state.gotToken2TokenConversion = false;
      state.error = action.payload;
    },

    /**
     * token to fiat conversion
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getToken2FiatConversion(state, action) {
      state.gettingToken2FiatConversion = true;
      state.gotToken2FiatConversion = false;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getToken2FiatConversionSuccess(state, action) {
      state.gettingToken2FiatConversion = false;
      state.gotToken2FiatConversion = true;

      const { tokenSymbol, convertedPrice, convertedTarget } = action.payload;
      state.conversionRates[tokenSymbol][convertedTarget] = convertedPrice || 0;
    },
    getToken2FiatConversionFailure(state, action) {
      state.gettingToken2FiatConversion = false;
      state.gotToken2FiatConversion = false;
      state.error = action.payload;
    },

    /**
     * get popular pairings
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getPopularPairings(state, action) {
      state.gettingPopularPairings = true;
      state.gotPopularPairings = false;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getPopularPairingsSuccess(state, action) {
      state.gettingPopularPairings = false;
      state.gotPopularPairings = true;
      state.popularPairings = action.payload;
    },
    getPopularPairingsFailure(state, action) {
      state.gettingPopularPairings = false;
      state.gotPopularPairings = false;
      state.error = action.payload;
    },

    /**
     * get price impact
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getPriceImpact(state, action) {
      state.gettingPopularPairings = true;
      state.gotPopularPairings = false;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getPriceImpactSuccess(state, action) {
      state.gettingPopularPairings = false;
      state.gotPopularPairings = true;
    },
    getPriceImpactFailure(state, action) {
      state.gettingPopularPairings = false;
      state.gotPopularPairings = false;
      state.error = action.payload;
    },

    /**
     * get slippage bounds
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getSlippageBounds(state, action) {
      state.gettingPopularPairings = true;
      state.gotPopularPairings = false;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getSlippageBoundsSuccess(state, action) {
      state.gettingPopularPairings = false;
      state.gotPopularPairings = true;
    },
    getSlippageBoundsFailure(state, action) {
      state.gettingPopularPairings = false;
      state.gotPopularPairings = false;
      state.error = action.payload;
    },

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getTopTokensFromDatabase(state, action) {
      state.gettingTopTokensFromDatabase = true;
      state.gotTopTokensFromDatabase = false;
    },
    getTopTokensFromDatabaseSuccess(state, action) {
      state.gettingTopTokensFromDatabase = false;
      state.gotTopTokensFromDatabase = true;
      state.tokenDetails = [...action.payload];
    },
    getTokenDetailFromDatabaseSuccess(state, action) {
      state.gettingTopTokensFromDatabase = false;
      state.gotTopTokensFromDatabase = true;
      state.tokenDetail = { ...action.payload };
    },
    getTopTokensFromDatabaseFailure(state, action) {
      state.gettingTopTokensFromDatabase = false;
      state.gotTopTokensFromDatabase = false;
      state.error = action.payload;
    },

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getTokenBalances(state, action: PayloadAction<ITokenBalancesRequest>) {
      state.gettingTokenBalances = true;
      state.gotTokenBalances = false;
    },
    getTokenBalancesSuccess(state, action: PayloadAction<ITokenBalance[]>) {
      state.gettingTokenBalances = false;
      state.gotTokenBalances = true;
      state.tokenBalances = [...action.payload];
    },
    getTokenBalancesFailure(state, action) {
      state.gettingTokenBalances = false;
      state.gotTokenBalances = false;
      state.error = action.payload;
    },

    getMarketPrices(state) {
      state.gettingMarketPrices = true;
      state.gotMarketPrices = false;
    },
    getMarketPricesSuccess(state, action: PayloadAction<IPrice[]>) {
      state.gettingMarketPrices = false;
      state.gotMarketPrices = true;
      action.payload.map((el: IPrice) => {
        state.conversionRates[el.from][el.to] = +el.rate;
        state.conversionRates[el.to][el.from] = 1 / +el.rate;
      });
    },
    getMarketPricesFailure(state, action) {
      state.gettingMarketPrices = false;
      state.gotMarketPrices = false;
      state.error = action.payload;
    }
  },
});

export const actions = tokenSlice.actions;
export const reducer = tokenSlice.reducer;

