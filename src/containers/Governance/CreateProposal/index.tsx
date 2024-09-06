import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import { ApproveTransactionModal, CreateProposalView, TransactionStatusModal } from 'components';
import { AlertVariant, ProposalType, TransactionCommands, TransactionModule, TransactionStatus, TransactionType, alertMessages } from 'consts';
import { useJsonRpc } from 'contexts';
import { AppActions, RootState } from 'store';
import { IAccount, IProposal, ITransactionObject } from 'models';
import { createProposalParamsSchema } from 'utils';
import { apiGetAuth } from 'apis';

export const CreateProposalContainer: React.FC = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const { accountTokens, tokenBalances } = useSelector((root: RootState) => root.token);
  const { submitedTransaction, submitingTransaction, submitedTransactionError: transactionError } = useSelector((state: RootState) => state.transaction);
  const { account } = useSelector((state: RootState) => state.wallet);
  const [openTransactionStatusModal, setOpenTransactionStatusModal] = useState<boolean>(false);
  const [transactionStatus, setTransactionStatus] = useState<TransactionStatus>(TransactionStatus.PENDING);
  // states for approvalTransactionModal
  const [transactionObject, setTransactionObject] = useState<ITransactionObject>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [feeTokenID, setFeeTokenID] = useState<string>('0100001100000000');
  const [openApproveTransactionModal, setOpenApproveTransactionModal] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [closeTransactionModal, setCloseTransactionModal] = useState<boolean>(false);
  const { pools } = useSelector((root: RootState) => root.pool);

  const {
    rpcResult,
    liskRpc,
  } = useJsonRpc();

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

  useEffect(() => {
    dispatch(AppActions.pool.getPools({}));
    dispatch(AppActions.transaction.resetTransactionStates());
  }, [dispatch]);

  const onSubmit = async (proposal: IProposal) => {
    if (pools.length === 0 && proposal.proposalType === ProposalType.PoolIncentivization) {
      enqueueSnackbar('Pool is required to create proposal', { variant: 'alert', type: AlertVariant.fail, subject: alertMessages.POOL_DOES_NOT_EXIST });
      return;
    }

    if (account) {
      const { chainId, publicKey } = account;

      try {
        const authResponse = await apiGetAuth({
          address: account.address,
        });

        const content = {
          text: Buffer.from(proposal.description, 'utf-8'),
          poolID: '0000000000000000000001000000000000c8'.slice(0, 16),
          multiplier: proposal.multiplier || 1,
          metadata: {
            title: Buffer.from(proposal.title, 'utf-8'),
            author: Buffer.from(proposal.author, 'utf-8'),
            summary: Buffer.from(proposal.summary, 'utf-8'),
            discussionsTo: Buffer.from(proposal.link || 'http://lisk.com', 'utf-8'),
          },
        };

        const transaction = {
          module: TransactionModule.dexGovernance,
          command: TransactionCommands.createProposal,
          fee: '20000000',
          nonce: authResponse.data.nonce || 0,
          senderPublicKey: publicKey,
          signatures: [],
          params: {
            type: proposal.proposalType === ProposalType.PoolIncentivization ? 1 : 0,
            content,
          }
        };

        setTransactionObject(transaction);
        liskRpc.signTransaction(chainId, publicKey, createProposalParamsSchema, transaction);
        setOpenTransactionStatusModal(true);
        setCloseTransactionModal(false);
      } catch (e) {
        enqueueSnackbar(String(e), { variant: 'alert', type: AlertVariant.fail });
      }
    } else {
      enqueueSnackbar('', { variant: 'alert', type: AlertVariant.fail, subject: alertMessages.CONNECT_YOUR_WALLET });
    }
  };

  const onCloseProposalSubmitted = () => {
    dispatch(AppActions.transaction.resetTransactionStates());
  };

  const onCloseTransactionStatusModal = () => {
    setOpenTransactionStatusModal(false);
    if (submitedTransaction || transactionError.error) {
      setCloseTransactionModal(true);
      dispatch(AppActions.transaction.resetTransactionStates());
    }
  };

  //submit signed transaction
  const onConfirmApproval = () => {
    if (rpcResult?.result) {
      dispatch(AppActions.transaction.submitTransaction({
        transaction: rpcResult.result,
      }));
    }
  };

  const onCloseApproveTransactionModal = () => {
    setOpenApproveTransactionModal(false);
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

  return (
    <>
      <CreateProposalView
        pools={pools}
        onSubmit={onSubmit}
        onCloseProposalSubmitted={onCloseProposalSubmitted}
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