import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import { useRouter } from 'next/router';
import { AppActions, RootState } from 'store';
import { ApproveTransactionModal, ProposalView, TransactionStatusModal } from 'components';
import { AlertVariant, TransactionCommands, TransactionModule, TransactionStatus, TransactionType } from 'consts';
import { useJsonRpc } from 'contexts';
import { createTransactionObject, voteOnProposalParamsSchema } from 'utils';
import { IAccount, ITransactionObject } from 'models';

export const ProposalContainer: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  const { accountTokens, tokenBalances } = useSelector((root: RootState) => root.token);
  const { votes, votesTotal, votesTotalPages, proposal } = useSelector((state: RootState) => state.proposal);
  const [votesPage, setVotesPage] = useState<number>(0);

  const { submitedTransaction, submitingTransaction, submitedTransactionError: transactionError } = useSelector((state: RootState) => state.transaction);
  const { account } = useSelector((state: RootState) => state.wallet);

  const [openTransactionStatusModal, setOpenTransactionStatusModal] = useState<boolean>(false);

  const [transactionStatus, setTransactionStatus] = useState<TransactionStatus>(TransactionStatus.PENDING);

  // states for approvalTransactionModal
  const [transactionObject, setTransactionObject] = useState<ITransactionObject>();
  const [feeTokenID, setFeeTokenID] = useState<string>('');
  const [openApproveTransactionModal, setOpenApproveTransactionModal] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [closeTransactionModal, setCloseTransactionModal] = useState<boolean>(false);

  const {
    rpcResult,
    liskRpc,
  } = useJsonRpc();

  const onViewMore = () => {
    setVotesPage((prevState) => prevState + 1);
  };

  useEffect(() => {
    dispatch(AppActions.proposal.getVotesByProposal(votesPage));
    if (router && router.query.id) {
      dispatch(AppActions.proposal.getCertainProposal({ proposalId: router.query.id }));
    }
  }, [votesPage, dispatch, router]);

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
    dispatch(AppActions.transaction.resetTransactionStates());
  }, [dispatch]);

  const onVote = async (value: string) => {
    if (account && (value === 'yes' || value === 'no')) {
      const { chainId, publicKey } = account;
      const decision = value === 'yes' ? 1 : 0;
      const params = {
        proposalIndex: 1,
        decision,
      };

      createTransactionObject(TransactionModule.dexGovernance, TransactionCommands.voteOnProposal, account, params)
        .then(({ feeTokenID: _feeTokenID, transactionObject: rawTx, }) => {
          setTransactionObject(rawTx);
          setFeeTokenID(_feeTokenID);

          liskRpc.signTransaction(chainId, publicKey, voteOnProposalParamsSchema, rawTx);
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
      <ProposalView
        votes={votes}
        votesPage={votesPage}
        votesTotal={votesTotal}
        votesTotalPages={votesTotalPages}
        proposal={proposal}
        onViewMore={onViewMore}
        onVote={onVote}
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