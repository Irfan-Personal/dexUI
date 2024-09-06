import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import { ApproveTransactionModal, SwapView, TransactionStatusModal } from 'components';
import { AlertVariant, TransactionCommands, TransactionModule, TransactionStatus, TransactionType, alertMessages } from 'consts';
import { AppActions, RootState } from 'store';
import { useJsonRpc } from 'contexts';
import { createTransactionObject, getTokenAmount, swapExactInCommandSchema, swapExactOutCommandSchema } from 'utils';
import { useEffect, useState } from 'react';
import { IAccount, ISwapData, ITransactionObject } from 'models';

export const SwapContainer: React.FC = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const { account } = useSelector((state: RootState) => state.wallet);
  const { submitedTransaction, submitingTransaction, submitedTransactionError: transactionError } = useSelector((state: RootState) => state.transaction);
  const { accountTokens, tokenBalances } = useSelector((state: RootState) => state.token);
  const [openTransactionStatusModal, setOpenTransactionStatusModal] = useState<boolean>(false);
  const [transactionStatus, setTransactionStatus] = useState<TransactionStatus>(TransactionStatus.PENDING);
  const [openApproveTransactionModal, setOpenApproveTransactionModal] = useState<boolean>(false);
  const [closeTransactionModal, setCloseTransactionModal] = useState<boolean>(false);

  // eslint-disable-next-line  @typescript-eslint/no-unused-vars
  const { pools, poolIDs } = useSelector((root: RootState) => root.pool);

  // states for approvalTransactionModal
  const [transactionObject, setTransactionObject] = useState<ITransactionObject>();
  const [feeTokenID, setFeeTokenID] = useState<string>('');

  // Use `JsonRpcContext` to provide us with relevant RPC methods and states.
  const {
    rpcResult,
    liskRpc,
  } = useJsonRpc();

  useEffect(() => {
    dispatch(AppActions.token.getAccountTokens({}));
    dispatch(AppActions.pool.getPools({}));
    dispatch(AppActions.transaction.resetTransactionStates());
  }, [dispatch]);

  useEffect(() => {
    if (account && account.address) {
      dispatch(AppActions.token.getTokenBalances({
        address: account.address
      }));
    }
  }, [account, dispatch]);

  const onConfirmSwap = (data: ISwapData) => {
    const { tokenIn, tokenOut, tokenInAmount, tokenOutAmount, swapExactIn } = data;

    if (poolIDs.length === 0) {
      enqueueSnackbar(`${tokenIn.symbol}/${tokenOut.symbol} pool is required for swap`, { variant: 'alert', type: AlertVariant.fail, subject: alertMessages.POOL_DOES_NOT_EXIST });
      return;
    }

    if (account) {
      const { chainId, publicKey } = account;

      const params: any = {
        tokenIdIn: tokenIn.tokenID,
        tokenIdOut: tokenOut.tokenID,
        swapRoute: [Buffer.from(poolIDs[0]).toString('hex')],
        maxTimestampValid: 100000000000,
      };

      if (swapExactIn) {
        params.amountTokenIn = getTokenAmount(tokenInAmount, tokenIn);
        params.minAmountTokenOut = getTokenAmount(tokenOutAmount, tokenOut);
      } else {
        params.maxAmountTokenIn = getTokenAmount(tokenInAmount, tokenIn);
        params.amountTokenOut = getTokenAmount(tokenOutAmount, tokenOut);
      }

      createTransactionObject(TransactionModule.dex, swapExactIn ? TransactionCommands.swapExactIn : TransactionCommands.swapExactOut, account, params)
        .then(({ feeTokenID: _feeTokenID, transactionObject: rawTx, }) => {
          console.log('transaction: ', rawTx);
          setTransactionObject(rawTx);
          setFeeTokenID(_feeTokenID);

          liskRpc.signTransaction(chainId, publicKey, swapExactIn ? swapExactInCommandSchema : swapExactOutCommandSchema, rawTx);
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

  const getToken2FiatConversion = (tokenSymbol: string, currency: string) => {
    dispatch(AppActions.token.getToken2FiatConversion({
      tokenSymbol,
      currency,
    }));
  };

  return (
    <>
      <SwapView
        account={account}
        tokens={accountTokens}
        tokenBalances={tokenBalances}
        closeTransactionModal={closeTransactionModal}
        onConfirmSwap={onConfirmSwap}
        getToken2FiatConversion={getToken2FiatConversion}
      />
      {
        openTransactionStatusModal &&
        <TransactionStatusModal
          status={transactionStatus}
          type={TransactionType.SWAP}
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