import { ThemeType } from 'consts';

export interface IFiatCurrency {
  name: string,
  symbol: string,
  image: any,
}

export interface ISettings {
  splipageTolerance: number,
  transactionDeadline: number,
  theme: ThemeType,
  currency: string,
}
