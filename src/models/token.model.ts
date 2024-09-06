export interface DenomUnit {
  denom: string,
  decimals: number,
  aliases: string[]
}
export interface IToken {
  chainID: string,
  chainName: string,
  tokenName: string,
  tokenID: string,
  networkType?: string,
  description?: string,
  logo: {
    png: string,
    svg: string,
  },
  symbol: string,
  displayDenom: string,
  baseDenom?: string,
  denomUnits: DenomUnit[],
}

export interface ITokenDetail {
  name: string,
  price: number,
  priceChange: number,
  volume24H: number,
  liquidity: number,
  tokenID: string,
  symbol: string,
}

export type ConversionRates = {
  [baseCurrency: string]: {
    [targetCurrency: string]: number;
  };
};

export interface ISwapData {
  tokenIn: IToken,
  tokenOut: IToken,
  tokenInAmount: number,
  tokenOutAmount: number,
  swapExactIn: boolean,
}

export interface IFilteredTokens {
  filteredTokens: ITokenDetail[],
}

export interface ILockedBalance {
  module: string,
  amount: string,
}
export interface ITokenBalance {
  tokenID: string,
  availableBalance: string,
  lockedBalances?: ILockedBalance[],
}

export interface IPrice {
  code: string,
  from: string,
  rate: string,
  to: string,
  updateTimestamp: number,
  sources: string[],
}