import { cryptoDecimalFormat, currencyDecimalFormat, getDisplayTokenAmount, getTokenAmount } from './index';
import { mockTokens } from '__mock__';

describe('test form functions', () => {
  it('cryptoDecimalFormat', () => {
    expect(cryptoDecimalFormat(1.88888888888)).toEqual('1.88888888888');
  });

  it('currencyDecimalFormat', () => {
    expect(currencyDecimalFormat(1.88888888888)).toEqual('$1.89');
  });

  it('getDisplayTokenAmount', () => {
    expect(getDisplayTokenAmount(100000000, mockTokens[0])).toEqual('100000000.00');
  });

  it('getTokenAmount', () => {
    expect(getTokenAmount(100000000, mockTokens[0])).toEqual(100000000);
  });
});
