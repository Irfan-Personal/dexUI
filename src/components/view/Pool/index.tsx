import { Grid } from '@mui/material';
import { IAccount, ICreatePool, IPool, IToken, ITokenBalance } from 'models';
import { useEffect, useState } from 'react';
import { PoolViewStyle } from './index.style';
import { LiskDexLP } from './LiskDexLP';
import { RemoveLiquidityModal } from './RemoveLiquidityModal';
import { SupplyLiquidity } from './SupplyLiquidity';
import { SupplyLiquidityModal } from './SupplyLiquidityModal';
import { TransactionCommands } from 'consts';

export interface IPoolViewProps {
  requestingSignature: boolean,
  pools: IPool[],
  gettingPools: boolean,
  gotPools: boolean,
  closeTransactionModal: boolean,
  account: IAccount | null,
  accountTokens: IToken[],
  tokenBalances: ITokenBalance[],
  createPool: (pool: ICreatePool) => void,
  createPosition: (pool: ICreatePool) => void,
  addLiquidity: (pool: IPool) => void,
  onConfirmRemoveLiquidity: (pool: IPool) => void,
}

export const PoolView: React.FC<IPoolViewProps> = (props) => {
  const {
    requestingSignature,
    pools,
    gotPools,
    gettingPools,
    closeTransactionModal,
    accountTokens,
    tokenBalances,
    createPool,
    createPosition,
    addLiquidity,
    onConfirmRemoveLiquidity
  } = props;

  const [openSupplyModal, setOpenSupplyModal] = useState<boolean>(false);
  const [openRemoveLiquidityModal, setOpenRemoveLiquidityModal] = useState<boolean>(false);
  const [pool, setPool] = useState<IPool | ICreatePool>();
  const [moduleCommand, setModuleCommand] = useState<string>('');

  const onPreview = (pool: IPool | ICreatePool) => {
    setOpenSupplyModal(true);
    setPool(pool);
  };

  const onPreviewRemove = (pool: IPool) => {
    setOpenRemoveLiquidityModal(true);
    setPool(pool);
  };

  useEffect(() => {
    if (requestingSignature) {
      setOpenSupplyModal(false);
      setOpenRemoveLiquidityModal(false);
    }
  }, [requestingSignature]);

  useEffect(() => {
    if (pools.length > 0) {
      setModuleCommand(TransactionCommands.createPosition);
    } else {
      setModuleCommand(TransactionCommands.createPool);
    }
  }, [pools]);

  const onConfirmSupplyLiquidity = () => {
    if (moduleCommand === TransactionCommands.createPool) {
      createPool(pool as ICreatePool);
    }
    if (moduleCommand === TransactionCommands.createPosition) {
      createPosition(pool as ICreatePool);
    }
    if (moduleCommand === TransactionCommands.addLiquidity) {
      addLiquidity(pool as IPool);
    }
  };

  return (
    <PoolViewStyle>
      <Grid container spacing={3}>
        <Grid item lg={5.5} md={12} sm={12} xs={12}>
          <SupplyLiquidity
            tokens={accountTokens}
            tokenBalances={tokenBalances}
            onPreview={onPreview}
            closeTransactionModal={closeTransactionModal}
          />
        </Grid>
        <Grid item lg={6.5} md={12} sm={12} xs={12}>
          <LiskDexLP
            pools={pools}
            gotPools={gotPools}
            gettingPools={gettingPools}
            onPreview={onPreview}
            onPreviewRemove={onPreviewRemove}
          />
        </Grid>
      </Grid>
      {
        openSupplyModal && pool &&
        <SupplyLiquidityModal
          pool={pool as ICreatePool}
          moduleCommand={moduleCommand}
          onClose={() => { setOpenSupplyModal(false); }}
          onConfirm={onConfirmSupplyLiquidity}
        />
      }
      {
        openRemoveLiquidityModal && pool &&
        <RemoveLiquidityModal
          pool={pool as IPool}
          onClose={() => { setOpenSupplyModal(false); }}
          onConfirm={onConfirmRemoveLiquidity}
        />
      }
    </PoolViewStyle>
  );
};