import { Box, IconButton, Typography } from '@mui/material';
import {
  ButtonComponent,
} from 'components';
import { CancelIcon, LightIcon } from 'imgs/icons';
import { RemoveLiquidityStyle } from './index.style';
import { IPool } from 'models';
import { useState } from 'react';

export interface IRemoveLiquidityModalProps {
  pool: IPool,
  onClose: () => void,
  onConfirm: (pool: IPool) => void,
}

export const RemoveLiquidityModal: React.FC<IRemoveLiquidityModalProps> = (props) => {
  const { pool, onClose, onConfirm } = props;

  const [isLoading, setLoading] = useState<boolean>(false);

  const onClickConfirm = () => {
    setLoading(true);
    onConfirm(pool);
  };
  return (
    <RemoveLiquidityStyle data-testid="remove-liquidity-modal-test">
      <Box className="remove-liquidity-modal-background" />
      <Box className="remove-liquidity-modal-container">
        <Box className="remove-liquidity-modal-header">
          <LightIcon className="light-icon data-index-1"></LightIcon>
          <LightIcon className="light-icon data-index-2"></LightIcon>
          <LightIcon className="light-icon data-index-3"></LightIcon>
          <LightIcon className="light-icon data-index-4"></LightIcon>
          <LightIcon className="light-icon data-index-5"></LightIcon>
          <LightIcon className="light-icon data-index-6"></LightIcon>

          <Box className="remove-liquidity-modal-title">
            <Typography variant="h4">Removing Liquidity</Typography>
            <IconButton data-testid="remove-liquidity-modal-cancel-test" onClick={onClose}>
              <CancelIcon />
            </IconButton>
          </Box>
          <Box className="remove-liquidity-modal-description">
            <Box>
              <img src={pool.token1.logo.png} width={48} height={48} alt={pool.token1.symbol} style={{ borderRadius: '100%' }} />
              <img src={pool.token2.logo.png} width={48} height={48} alt={pool.token2.symbol} style={{ borderRadius: '100%' }} />
            </Box>
            <Typography variant="body1">You will receive {pool.token1Amount} {pool.token1.symbol} and {pool.token2Amount} {pool.token2.symbol} Tokens</Typography>
          </Box>
        </Box>
        <Box className="remove-liquidity-modal-body">
          <Box className="deposit-property">
            <Typography variant="body1">{pool.token1.symbol} removed:</Typography>
            <Box className="deposit-property-amount">
              <img src={pool.token1.logo.png} width={24} height={24} alt={pool.token1.symbol} style={{ borderRadius: '100%' }} />
              <Typography variant="body1">{pool.token1Amount}</Typography>
            </Box>
          </Box>
          <Box className="deposit-property">
            <Typography variant="body1">{pool.token2.symbol} removed:</Typography>
            <Box className="deposit-property-amount">
              <img src={pool.token2.logo.png} width={24} height={24} alt={pool.token2.symbol} style={{ borderRadius: '100%' }} />
              <Typography variant="body1">{pool.token2Amount}</Typography>
            </Box>
          </Box>
          <Typography
            className="deposit-description"
            variant="body1"
          >
            Output is estimated. If the price changes by more than 0.5% your transaction will revert.
          </Typography>
          <ButtonComponent
            data-testid="remove-liquidity-modal-button-test"
            className="remove-liquidity-modal-confirm"
            loading={isLoading}
            onClick={onClickConfirm}
          >
            <Typography variant="body1">Go to Confirm</Typography>
          </ButtonComponent>
        </Box>
      </Box>
    </RemoveLiquidityStyle>
  );
};