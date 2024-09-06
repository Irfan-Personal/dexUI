import { TransactionStatusStyle } from './index.style';
import { Box, CircularProgress, Link, Typography } from '@mui/material';
import { SuccessIcon } from 'imgs/icons';
import { ButtonComponent } from 'components/common';
import { useEffect, useRef, useState } from 'react';
import { TransactionStatus, TransactionType } from 'consts';
import { FailureIcon } from 'imgs/icons/FailureIcon';

export interface ITransactionStatusModalProps {
  status: TransactionStatus,
  type?: TransactionType,
  onClose?: () => void
}

export const TransactionStatusModal: React.FC<ITransactionStatusModalProps> = (props) => {
  const { status, type, onClose } = props;

  const [stateText, setStateText] = useState<string>('');
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (type === TransactionType.SWAP) {
      setStateText('Swapping tokens...');
      if (status === TransactionStatus.SUCCESS) {
        setStateText('Swap successful');
      }
      if (status === TransactionStatus.FAILURE) {
        setStateText('Failed to swap');
      }
    }
    if (type === TransactionType.SUPPLY_LIQUIDITY) {
      setStateText('Supplying liquidity...');
      if (status === TransactionStatus.SUCCESS) {
        setStateText('Successfully supplied liquidity.');
      }
      if (status === TransactionStatus.FAILURE) {
        setStateText('Failed to supply liquidity');
      }
    }
    if (type === TransactionType.INCREASE_LIQUIDITY) {
      setStateText('Supplying liquidity...');
      if (status === TransactionStatus.SUCCESS) {
        setStateText('Successfully increased liquidity.');
      }
      if (status === TransactionStatus.FAILURE) {
        setStateText('Failed to increase liquidity');
      }
    }
    if (type === TransactionType.REMOVE_LIQUIDITY) {
      setStateText('Removing liquidity...');
      if (status === TransactionStatus.SUCCESS) {
        setStateText('Successfully removed liquidity.');
      }
      if (status === TransactionStatus.FAILURE) {
        setStateText('Failed to remove');
      }
    }
  }, [type, status]);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        onClose && onClose();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wrapperRef]);

  return (
    <TransactionStatusStyle>
      <Box className="transaction-status-background" />
      <Box className="transaction-status-modal-container" ref={wrapperRef}>
        <Typography variant="h3">
          {
            {
              [TransactionStatus.SUCCESS]: 'Transaction submitted',
              [TransactionStatus.FAILURE]: 'Transaction failed',
              [TransactionStatus.PENDING]: 'Waiting for Confirmation',
            }[status]
          }
        </Typography>
        {
          {
            [TransactionStatus.SUCCESS]: <SuccessIcon className="transaction-status-icon" />,
            [TransactionStatus.FAILURE]: <FailureIcon className="transaction-status-icon" />,
            [TransactionStatus.PENDING]: <Box className="transaction-status-icon">
              <CircularProgress
                className="circular-progress background"
                variant="determinate"
                value={100}
                thickness={1}
              />
              <CircularProgress
                className="circular-progress foreground"
                thickness={1}
              />
            </Box>,
          }[status]
        }
        <Typography className="transaction-status-content" variant="body1" >
          {stateText}
        </Typography>
        {
          {
            [TransactionStatus.SUCCESS]: <>
              <Link>
                <Typography className="transaction-status-content" variant="body1" >View on Liskscan</Typography>
              </Link>
              <ButtonComponent
                data-testid="transaction-status-modal-close"
                onClick={() => { onClose && onClose(); }}
              >
                <Typography variant="body1">Close</Typography>
              </ButtonComponent>
            </>,
            [TransactionStatus.FAILURE]: <>
              <ButtonComponent
                data-testid="transaction-status-modal-close"
                onClick={() => { onClose && onClose(); }}
              >
                <Typography variant="body1">Close</Typography>
              </ButtonComponent>
            </>,
            [TransactionStatus.PENDING]: <Typography className="confirm-transaction-wallet" variant="body2">Confirm this transaction in your wallet</Typography>,
          }[status]
        }
      </Box>
    </TransactionStatusStyle >
  );
};
