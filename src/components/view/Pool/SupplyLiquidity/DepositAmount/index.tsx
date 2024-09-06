import { Box, FormHelperText, Typography } from '@mui/material';
import { IToken } from 'models';
import { DepositAmountStyle } from './index.style';
import { useEffect, useState } from 'react';
import { InputComponent } from 'components/common';
import { cryptoDecimalFormat } from 'utils';
import { validationErrorMessages } from 'consts';

export interface IDepositAmountProps {
  balance: number,
  tokenAmount: number | string,
  token?: IToken,
  onChange: (amount: number | string) => void,
}

export const DepositAmount: React.FC<IDepositAmountProps> = (props) => {
  const { balance, token, tokenAmount, onChange } = props;

  const [amount, setAmount] = useState<number | string>(tokenAmount);

  useEffect(() => {
    onChange(amount);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amount]);

  useEffect(() => {
    setAmount(tokenAmount);
  }, [tokenAmount]);

  return (
    <DepositAmountStyle className="deposit-amount">
      <Box className="token-amount">
        {
          token ?
            <Box className="selected-token">
              <img src={token.logo.png} alt={token.symbol} width={28} height={28} style={{ borderRadius: '100%' }} />
              <Typography variant="subtitle1">{token.symbol}</Typography>
            </Box>
            :
            <Box className="select-tokens">
              <Typography variant="subtitle1">Select tokens</Typography>
            </Box>
        }
        <InputComponent
          type="number"
          value={amount}
          onChange={(e) => { setAmount(e.target.value); }}
          onBlur={() => { setAmount(cryptoDecimalFormat(+amount)); }}
        />
      </Box>
      {
        +tokenAmount > +balance &&
        <FormHelperText className="input-error">
          <Typography variant='body2'>{validationErrorMessages.NOT_ENOUGH_BALANCE}</Typography>
        </FormHelperText>
      }
      {
        !!token &&
        <Box className="token-balance-details">
          <Typography variant="body2">Balance: {cryptoDecimalFormat(balance)}</Typography>
          <Box className="token-balance-percent token">
            <Typography data-testid={`${token.symbol}-amount-percent-25`} variant="body2" onClick={() => setAmount(cryptoDecimalFormat(balance / 4))}>25%</Typography>
            <Typography data-testid={`${token.symbol}-amount-percent-50`} variant="body2" onClick={() => setAmount(cryptoDecimalFormat(balance / 2))}>50%</Typography>
            <Typography data-testid={`${token.symbol}-amount-percent-max`} variant="body2" onClick={() => setAmount(cryptoDecimalFormat(balance))}>MAX</Typography>
          </Box>
        </Box>
      }
    </DepositAmountStyle>
  );
};