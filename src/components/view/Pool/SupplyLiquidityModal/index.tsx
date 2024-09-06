import { Box, IconButton, Typography } from '@mui/material';
import {
  ButtonComponent,
} from 'components';
import { CancelIcon, LightIcon } from 'imgs/icons';
import { SupplyLiquidityStyle } from './index.style';
import { ICreatePool } from 'models';
import { useState } from 'react';
import { TransactionCommands } from 'consts';

export interface ISupplyLiquidityModalProps {
  pool: ICreatePool,
  moduleCommand: string,
  onClose: () => void,
  onConfirm: () => void,
}

export const SupplyLiquidityModal: React.FC<ISupplyLiquidityModalProps> = (props) => {
  const { pool, moduleCommand, onClose, onConfirm } = props;

  const [isLoading, setLoading] = useState<boolean>(false);

  const onClickConfirm = () => {
    setLoading(true);
    onConfirm();
  };
  return (
    <SupplyLiquidityStyle data-testid="supply-liquidity-modal-test">
      <Box className="supply-liquidity-modal-background" />
      <Box className="supply-liquidity-modal-container">
        <Box className="supply-liquidity-modal-header">
          <LightIcon className="light-icon data-index-1"></LightIcon>
          <LightIcon className="light-icon data-index-2"></LightIcon>
          <LightIcon className="light-icon data-index-3"></LightIcon>
          <LightIcon className="light-icon data-index-4"></LightIcon>
          <LightIcon className="light-icon data-index-5"></LightIcon>
          <LightIcon className="light-icon data-index-6"></LightIcon>

          <Box className="supply-liquidity-modal-title">
            <Typography variant="h4">Supplying Liquidity</Typography>
            <IconButton data-testid="supply-liquidity-modal-cancel-test" onClick={onClose}>
              <CancelIcon />
            </IconButton>
          </Box>
          <Box className="supply-liquidity-modal-description">
            <Box>
              <img src={pool.token1.logo.png} width={48} height={48} alt={pool.token1.symbol} style={{ borderRadius: '100%' }} />
              <img src={pool.token2.logo.png} width={48} height={48} alt={pool.token2.symbol} style={{ borderRadius: '100%' }} />
            </Box>
            <Typography variant="body1">Supplying {pool.token1Amount} {pool.token1.symbol} and {pool.token2Amount} {pool.token2.symbol}</Typography>
          </Box>
        </Box>
        <Box className="supply-liquidity-modal-body">
          <Box className="deposit-property">
            <Typography variant="body1">{pool.token1.symbol} Deposited:</Typography>
            <Box className="deposit-property-amount">
              <img src={pool.token1.logo.png} width={24} height={24} alt={pool.token1.symbol} style={{ borderRadius: '100%' }} />
              <Typography variant="body1">{pool.token1Amount}</Typography>
            </Box>
          </Box>
          <Box className="deposit-property">
            <Typography variant="body1">{pool.token2.symbol} Deposited:</Typography>
            <Box className="deposit-property-amount">
              <img src={pool.token2.logo.png} width={24} height={24} alt={pool.token2.symbol} style={{ borderRadius: '100%' }} />
              <Typography variant="body1">{pool.token2Amount}</Typography>
            </Box>
          </Box>
          <Typography
            className="deposit-description"
            variant="body1"
          >
            {
              moduleCommand === TransactionCommands.createPool &&
              'When creating a new pool you are the first liquidity provider. The ratio of tokens added will determine the price of the pool.'
            }
          </Typography>
          <ButtonComponent
            data-testid="supply-liquidity-modal-button-test"
            className="supply-liquidity-modal-confirm"
            loading={isLoading}
            onClick={onClickConfirm}
          >
            <Typography variant="body1">Go to Confirm</Typography>
          </ButtonComponent>
        </Box>
      </Box>
    </SupplyLiquidityStyle>
  );
};