import { IToken } from 'models';

export const allowDigitOnly = (event: any) => {
  if (
    !(
      (event.which >= 48 && event.which <= 57) || // 0 ~ 9
      (event.which >= 37 && event.which <= 40) || // arrow
      event.which == 8
    )
  ) {
    event.preventDefault();
  }
};


export const cryptoDecimalFormat = (amount: number, type: 'string' | 'number' = 'string'): string | number => {
  let text = amount.toLocaleString(undefined, {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 16,
  });

  text = text.replace(/,/g, '');

  if (type === 'string') {
    return text;
  } else {
    return parseFloat(text);
  }
};

export const currencyDecimalFormat = (amount: number, currency = 'USD') => {
  const text = amount.toLocaleString(undefined, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return text;
};

export const getDisplayTokenAmount = (amount: number, token: IToken) => {
  const { displayDenom, denomUnits } = token;
  const decimals = denomUnits.find(denomUnit => denomUnit.denom === displayDenom)?.decimals || 0;

  return cryptoDecimalFormat(amount / Math.pow(10, decimals));
};

export const getTokenAmount = (amount: number, token: IToken) => {
  const { displayDenom, denomUnits } = token;
  const decimals = denomUnits.find(denomUnit => denomUnit.denom === displayDenom)?.decimals || 0;

  return amount * Math.pow(10, decimals);
};
