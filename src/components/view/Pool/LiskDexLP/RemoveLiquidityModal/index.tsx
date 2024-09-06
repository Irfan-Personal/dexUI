import { Box, IconButton, Slider, Typography } from '@mui/material';
import {
  ButtonComponent,
} from 'components';
import { CancelIcon } from 'imgs/icons';
import { RemoveLiquidityModalStyle } from './index.style';
import { IPool } from 'models';
import { useState } from 'react';

export interface IRemoveLiquidityModalProps {
  pool: IPool,
  onClose: () => void,
  onPreview: (pool: IPool) => void,
}

const amountValues = [
  25,
  50,
  75
];

export const RemoveLiquidityModal: React.FC<IRemoveLiquidityModalProps> = (props) => {
  const { pool, onClose, onPreview } = props;

  const [isLoading, setLoading] = useState<boolean>(false);
  const [amount, setAmount] = useState<number>(50);

  const onClickConfirm = () => {
    setLoading(true);
    onPreview({
      ...pool,
    });
    onClose();
  };
  return (
    <RemoveLiquidityModalStyle data-testid="remove-liquidity-modal-test">
      <Box className="remove-liquidity-modal-background" />
      <Box className="remove-liquidity-modal-container">
        <Box className="remove-liquidity-modal-title">
          <Typography variant="h4">Increase liquidity</Typography>
          <IconButton data-testid="remove-liquidity-modal-cancel-test" onClick={onClose}>
            <CancelIcon />
          </IconButton>
        </Box>

        <Box className="remove-liquidity-modal-summmary">
          <img src={pool.token1.logo.png} width={24} height={24} alt={pool.token1.symbol} style={{ borderRadius: '100%' }} />
          <img src={pool.token2.logo.png} width={24} height={24} alt={pool.token2.symbol} style={{ borderRadius: '100%' }} />
          <Typography className="summary-token-name" variant="body1">{pool.token1.symbol} / {pool.token1.symbol}</Typography>

          <Box className="summary-rate">
            <Typography variant="body2">0.05%</Typography>
          </Box>
        </Box>

        <Box className="remove-liquidity-amount">
          <Typography className="amount-title" variant="body2">Amount</Typography>
          <Typography variant="h1">{amount}%</Typography>
          <Slider value={amount} onChange={(e, value) => { setAmount(value as number); }} />
          <Box className="amount-selections">
            {
              amountValues.map((el) => (
                <ButtonComponent
                  key={el}
                  variant={amount != el ? 'outlined' : 'contained'}
                  onClick={() => { setAmount(el); }}
                >
                  <Typography variant="body1">{el}%</Typography>
                </ButtonComponent>
              ))
            }
            <ButtonComponent
              variant={'outlined'}
              onClick={() => { setAmount(amount + 1); }}
            >
              <Typography variant="body1">+</Typography>
            </ButtonComponent>
          </Box>
        </Box>

        <Typography variant="body2">You will receive</Typography>
        <Box className="remove-liquidity-will-receive">
          <Box className="token-amount">
            <Box className="token1 title">
              <img src={pool.token1.logo.png} width={24} height={24} alt={pool.token1.symbol} style={{ borderRadius: '100%' }} />
              <Typography variant="body1">{pool.token1.symbol}</Typography>
            </Box>
            <Typography>{pool.token1Amount}</Typography>
          </Box>
          <Box className="token-amount token2">
            <Box className="title token2">
              <img src={pool.token2.logo.png} width={24} height={24} alt={pool.token2.symbol} style={{ borderRadius: '100%' }} />
              <Typography variant="body1">{pool.token2.symbol}</Typography>
            </Box>
            <Typography>{pool.token2Amount}</Typography>
          </Box>
        </Box>

        <Typography variant="body2">Prices</Typography>
        <Box className="remove-liquidity-will-receive">
          <Box className="token-amount">
            <Typography variant="body1">1 {pool.token1.symbol}</Typography>
            <Typography>0.00345 {pool.token2.symbol}</Typography>
          </Box>
          <Box className="token-amount token2">
            <Typography variant="body1">1 {pool.token2.symbol}</Typography>
            <Typography>2138.42 {pool.token1.symbol}</Typography>
          </Box>
        </Box>

        <ButtonComponent
          data-testid="remove-liquidity-modal-preview-test"
          className="remove-liquidity-modal-confirm"
          loading={isLoading}
          disabled={amount == 0}
          onClick={onClickConfirm}
        >
          <Typography variant="body1">Preview</Typography>
        </ButtonComponent>
      </Box>
    </RemoveLiquidityModalStyle>
  );
};