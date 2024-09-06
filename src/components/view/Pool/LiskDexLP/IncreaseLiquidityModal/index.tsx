import { Box, IconButton, InputAdornment, Typography } from '@mui/material';
import {
  ButtonComponent, InputComponent,
} from 'components';
import { CancelIcon } from 'imgs/icons';
import { IncreaseLiquidityModalStyle } from './index.style';
import { IPool } from 'models';
import { useState } from 'react';

export interface IIncreaseLiquidityModalProps {
  pool: IPool,
  onClose: () => void,
  onPreview: (pool: IPool) => void,
}

export const IncreaseLiquidityModal: React.FC<IIncreaseLiquidityModalProps> = (props) => {
  const { pool, onClose, onPreview } = props;

  const [isLoading, setLoading] = useState<boolean>(false);
  const [token1Amount, setToken1Amount] = useState<number>(0);
  const [token2Amount, setToken2Amount] = useState<number>(0);

  const onClickConfirm = () => {
    setLoading(true);
    onPreview({
      ...pool,
      token1Amount,
      token2Amount,
    });
    onClose();
  };
  return (
    <IncreaseLiquidityModalStyle data-testid="increase-liquidity-modal-test">
      <Box className="increase-liquidity-modal-background" />
      <Box className="increase-liquidity-modal-container">
        <Box className="increase-liquidity-modal-title">
          <Typography variant="h4">Increase liquidity</Typography>
          <IconButton data-testid="increase-liquidity-modal-cancel-test" onClick={onClose}>
            <CancelIcon />
          </IconButton>
        </Box>

        <Box className="increase-liquidity-modal-summmary">
          <img src={pool.token1.logo.png} width={24} height={24} alt={pool.token1.symbol} style={{ borderRadius: '100%' }} />
          <img src={pool.token2.logo.png} width={24} height={24} alt={pool.token2.symbol} style={{ borderRadius: '100%' }} />
          <Typography className="summary-token-name" variant="body1">{pool.token1.symbol} / {pool.token2.symbol}</Typography>

          <Box className="summary-rate">
            <Typography variant="body2">0.05%</Typography>
          </Box>
        </Box>

        <Box className="increase-liquidity-deposit-amounts">
          <Typography className="deposit-amount-title" variant="body2">Deposit amounts</Typography>
          <InputComponent
            data-testid="increase-liquidity-token1-input-test"
            startAdornment={
              <InputAdornment position="start">
                <img src={pool.token1.logo.png} width={40} height={40} alt={pool.token1.symbol} style={{ borderRadius: '100%' }} />
                <Typography variant="subtitle1">{pool.token1.symbol}</Typography>
              </InputAdornment>
            }
            variant="outlined"
            value={token1Amount}
            type="number"
            onChange={(e) => { setToken1Amount(parseFloat(e.target.value)); }}
          />
          <InputComponent
            data-testid="increase-liquidity-token2-input-test"
            startAdornment={
              <InputAdornment position="start">
                <img src={pool.token2.logo.png} width={40} height={40} alt={pool.token2.symbol} style={{ borderRadius: '100%' }} />
                <Typography variant="subtitle1">{pool.token2.symbol}</Typography>
              </InputAdornment>
            }
            variant="outlined"
            value={token2Amount}
            type="number"
            onChange={(e) => { setToken2Amount(parseFloat(e.target.value)); }}
          />
        </Box>
        <ButtonComponent
          data-testid="increase-liquidity-modal-preview-test"
          className="increase-liquidity-modal-confirm"
          loading={isLoading}
          disabled={token1Amount == 0 || token2Amount == 0}
          onClick={onClickConfirm}
        >
          <Typography variant="body1">Preview</Typography>
        </ButtonComponent>
      </Box>
    </IncreaseLiquidityModalStyle>
  );
};