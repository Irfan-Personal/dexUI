import { Box, IconButton, Typography } from '@mui/material';
import { ButtonComponent, TransactionSettings } from 'components';
import { CancelIcon } from 'imgs/icons';
import { useState } from 'react';
import { TransactionSettingsModalStyle } from './index.style';

export interface ITransactionSettingsModalProps {
  splipageTolerance: number,
  transactionDeadline: number,
  onSave: ({
    splipageTolerance,
    transactionDeadline
  }: {
    splipageTolerance: number,
    transactionDeadline: number,
  }) => void,
  onClose: () => void,
}

export const TransactionSettingsModal: React.FC<ITransactionSettingsModalProps> = (props) => {
  const { splipageTolerance: defaultSplipageTolerance, transactionDeadline: defaultTransactionDeadline, onSave, onClose } = props;

  const [splipageTolerance, setSplipageTolerance] = useState<number>(defaultSplipageTolerance);
  const [transactionDeadline, setTransactionDeadline] = useState<number>(defaultTransactionDeadline);

  const onClickSave = () => {
    onSave({ splipageTolerance, transactionDeadline });
  };
  return (
    <TransactionSettingsModalStyle>
      <Box className="transaction-settings-title">
        <Typography variant="h4">Transaction Settings</Typography>
        <IconButton
          data-testid="transaction-settings-cancel-test"
          onClick={onClose}
        >
          <CancelIcon />
        </IconButton>
      </Box>
      <Box className="transaction-settings-main">
        <TransactionSettings
          splipageTolerance={splipageTolerance}
          transactionDeadline={transactionDeadline}
          onChangeSplipageTolerance={(value) => { setSplipageTolerance(value); }}
          onChangeTransactionDeadline={(value) => { setTransactionDeadline(value); }}
        />

        <ButtonComponent
          data-testid="transaction-settings-save-test"
          onClick={onClickSave}
        >
          <Typography variant="h4">Save</Typography>
        </ButtonComponent>
      </Box>
    </TransactionSettingsModalStyle>
  );
};