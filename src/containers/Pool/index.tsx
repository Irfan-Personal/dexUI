import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import { ApproveTransactionModal, PoolView, TransactionStatusModal } from 'components';
import { AlertVariant, TransactionCommands, TransactionModule, TransactionStatus, TransactionType } from 'consts';
import { useJsonRpc } from 'contexts';
import { IAccount, ICreatePool, IPool, ITransactionObject } from 'models';
import { AppActions, RootState } from 'store';
import { createPoolSchema, createPositionSchema, addLiquiditySchema, removeLiquiditySchema, getTokenAmount, createTransactionObject } from 'utils';

export const MIN_TICK = -887272; // The minimum possible tick value as a sint32.
export const MAX_TICK = 887272; // The maximum possible tick value as a sint32.

export const PoolContainer: React.FC = () => {
  const dispatch = useDispatch();

  const { enqueueSnackbar } = useSnackbar();
  const { accountTokens, tokenBalances } = useSelector((root: RootState) => root.token);
  const { submitedTransaction, submitingTransaction, submitedTransactionError: transactionError } = useSelector((state: RootState) => state.transaction);
  const { pools, poolIDs, gotPools, gettingPools } = useSelector((state: RootState) => state.pool);
  const { account } = useSelector((state: RootState) => state.wallet);

  const [openTransactionStatusModal, setOpenTransactionStatusModal] = useState<boolean>(false);

  // states for approvalTransactionModal
  const [transactionObject, setTransactionObject] = useState<ITransactionObject>();
  const [feeTokenID, setFeeTokenID] = useState<string>('');

  const [transactionStatus, setTransactionStatus] = useState<TransactionStatus>(TransactionStatus.PENDING);
  const [openApproveTransactionModal, setOpenApproveTransactionModal] = useState<boolean>(false);
  const [closeTransactionModal, setCloseTransactionModal] = useState<boolean>(false);

  useEffect(() => {
    dispatch(AppActions.pool.getPools({}));
    dispatch(AppActions.pool.getStastics({}));
    dispatch(AppActions.transaction.resetTransactionStates());
  }, [dispatch]);

  useEffect(() => {
    if (account?.chainId) {
      dispatch(AppActions.token.getAccountTokens({}));
    }
    if (account && account.address) {
      dispatch(AppActions.token.getTokenBalances({
        address: account.address,
      }));
    }
  }, [account, dispatch]);

  // Use `JsonRpcContext` to provide us with relevant RPC methods and states.
  const {
    isRpcRequestPending,
    rpcResult,
    liskRpc,
  } = useJsonRpc();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const createPool = async (pool: ICreatePool) => {
    if (account) {
      const { chainId, publicKey } = account;

      const { token1, token2, feeTier, tickInitialPrice, token1Amount, token2Amount } = pool;
      const params = {
        tokenID0: token1.tokenID,
        tokenID1: token2.tokenID,
        feeTier: feeTier * 100,
        tickInitialPrice: tickInitialPrice,
        initialPosition: {
          tickLower: MIN_TICK,
          tickUpper: MAX_TICK,
          amount0Desired: getTokenAmount(token1Amount, token1),
          amount1Desired: getTokenAmount(token2Amount, token2),
        },
        maxTimestampValid: 100000000000,
      };

      createTransactionObject(TransactionModule.dex, TransactionCommands.createPool, account, params)
        .then(({ feeTokenID: _feeTokenID, transactionObject: rawTx, }) => {
          setTransactionObject(rawTx);
          setFeeTokenID(_feeTokenID);

          liskRpc.signTransaction(chainId, publicKey, createPoolSchema, rawTx);
          setOpenTransactionStatusModal(true);
          setCloseTransactionModal(false);
        })
        .catch(e => {
          enqueueSnackbar(String(e), { variant: 'alert', type: AlertVariant.fail });
        });
    }
  };

  const createPosition = (pool: ICreatePool) => {
    if (account) {
      const { chainId, publicKey } = account;

      const { token1Amount, token2Amount, token1, token2 } = pool;
      const params = {
        poolID: Buffer.from(poolIDs[0]).toString('hex'),
        tickLower: MIN_TICK,
        tickUpper: MAX_TICK,
        amount0Desired: getTokenAmount(token1Amount, token1),
        amount1Desired: getTokenAmount(token2Amount, token2),
        amount0Min: 0,
        amount1Min: 0,
        maxTimestampValid: 100000000000,
      };

      console.log(params);

      createTransactionObject(TransactionModule.dex, TransactionCommands.createPosition, account, params)
        .then(({ feeTokenID: _feeTokenID, transactionObject: rawTx, }) => {
          setTransactionObject(rawTx);
          setFeeTokenID(_feeTokenID);

          liskRpc.signTransaction(chainId, publicKey, createPositionSchema, rawTx);
          setOpenTransactionStatusModal(true);
          setCloseTransactionModal(false);
        })
        .catch(e => {
          enqueueSnackbar(String(e), { variant: 'alert', type: AlertVariant.fail });
        });
    }
  };

  const addLiquidity = async (pool: IPool) => {
    if (account) {
      const { chainId, publicKey } = account;
      const { token1Amount, token2Amount, token1, token2 } = pool;
      const params = {
        positionID: Buffer.from('0000000100', 'hex'),
        amount0Desired: getTokenAmount(token1Amount, token1),
        amount1Desired: getTokenAmount(token2Amount, token2),
        amount0Min: 0,
        amount1Min: 0,
        maxTimestampValid: 100000000000,
      };

      createTransactionObject(TransactionModule.dex, TransactionCommands.addLiquidity, account, params)
        .then(({ feeTokenID: _feeTokenID, transactionObject: rawTx, }) => {
          setTransactionObject(rawTx);
          setFeeTokenID(_feeTokenID);

          liskRpc.signTransaction(chainId, publicKey, addLiquiditySchema, rawTx);
          setOpenTransactionStatusModal(true);
          setCloseTransactionModal(false);
        })
        .catch(e => {
          enqueueSnackbar(String(e), { variant: 'alert', type: AlertVariant.fail });
        });
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onConfirmRemoveLiquidity = (pool: IPool) => {
    if (account) {
      const { chainId, publicKey } = account;
      const params = {
        positionID: Buffer.from('0000000100', 'hex'),
        liquidityToRemove: 250,
        amount0Min: 1000,
        amount1Min: 1000,
        maxTimestampValid: 100000000000,
      };

      createTransactionObject(TransactionModule.dex, TransactionCommands.removeLiquidity, account, params)
        .then(({ feeTokenID: _feeTokenID, transactionObject: rawTx, }) => {
          setTransactionObject(rawTx);
          setFeeTokenID(_feeTokenID);

          liskRpc.signTransaction(chainId, publicKey, removeLiquiditySchema, rawTx);
          setOpenTransactionStatusModal(true);
          setCloseTransactionModal(false);
        })
        .catch(e => {
          enqueueSnackbar(String(e), { variant: 'alert', type: AlertVariant.fail });
        });
    }
  };

  useEffect(() => {
    if (rpcResult && rpcResult.valid && openTransactionStatusModal) {
      setOpenApproveTransactionModal(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rpcResult]);

  useEffect(() => {
    if (submitedTransaction) {
      setTransactionStatus(TransactionStatus.SUCCESS);
      setOpenTransactionStatusModal(true);
    }
    if (transactionError.error) {
      setTransactionStatus(TransactionStatus.FAILURE);
      setOpenTransactionStatusModal(true);
    }
    setOpenApproveTransactionModal(false);
  }, [submitedTransaction, transactionError]);

  const onCloseTransactionStatusModal = () => {
    setOpenTransactionStatusModal(false);
    if (submitedTransaction || transactionError.error) {
      setCloseTransactionModal(true);
      setTransactionStatus(TransactionStatus.PENDING);
      dispatch(AppActions.transaction.resetTransactionStates());
    }
  };

  const onCloseApproveTransactionModal = () => {
    setOpenApproveTransactionModal(false);
  };

  //submit signed transaction
  const onConfirmApproval = () => {
    if (rpcResult?.result) {
      dispatch(AppActions.transaction.submitTransaction({
        transaction: rpcResult.result,
      }));
    }
  };

  return (
    <>
      <PoolView
        pools={pools}
        gettingPools={gettingPools}
        gotPools={gotPools}
        account={account}
        requestingSignature={isRpcRequestPending && openTransactionStatusModal}
        closeTransactionModal={closeTransactionModal}
        accountTokens={accountTokens}
        tokenBalances={tokenBalances}
        createPool={createPool}
        createPosition={createPosition}
        addLiquidity={addLiquidity}
        onConfirmRemoveLiquidity={onConfirmRemoveLiquidity}
      />
      {
        openTransactionStatusModal &&
        <TransactionStatusModal
          status={transactionStatus}
          type={TransactionType.SUPPLY_LIQUIDITY}
          onClose={onCloseTransactionStatusModal}
        />
      }
      {
        openApproveTransactionModal &&
        <ApproveTransactionModal
          approvingTransaction={submitingTransaction}
          transaction={transactionObject}
          account={account as IAccount}
          feeTokenID={feeTokenID}
          accountTokens={accountTokens}
          tokenBalances={tokenBalances}
          onConfirm={onConfirmApproval}
          onClose={onCloseApproveTransactionModal}
        />
      }
    </>
  );
};