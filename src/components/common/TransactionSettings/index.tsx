import { Box, Typography } from '@mui/material';
import { InputComponent } from 'components/common';
import { HelpIcon } from 'imgs/icons';
import { ChangeEvent, useState } from 'react';
import { TransactionSettingsStyle } from './index.style';
import cn from 'classnames';

export interface ITransactionSettingsProps {
  splipageTolerance: number,
  transactionDeadline: number,
  onChangeSplipageTolerance?: (value: number) => void,
  onChangeTransactionDeadline?: (value: number) => void,
}

const splipageToleranceValues = [
  0.1,
  0.5,
  1,
];

export const TransactionSettings: React.FC<ITransactionSettingsProps> = (props) => {
  const { splipageTolerance: defaultSplipageTolerance, transactionDeadline: defaultTransactionDeadline, onChangeSplipageTolerance, onChangeTransactionDeadline } = props;

  const [splipageTolerance, setSplipageTolerance] = useState<number>(defaultSplipageTolerance);
  const [transactionDeadline, setTransactionDeadline] = useState<number>(defaultTransactionDeadline);

  const onChangeTolerance = (value: number) => {
    setSplipageTolerance(value);
    onChangeSplipageTolerance && onChangeSplipageTolerance(value);
  };

  const onChangeDeadline = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTransactionDeadline(parseInt(e.target.value));
    onChangeTransactionDeadline && onChangeTransactionDeadline(parseInt(e.target.value));
  };

  return (
    <TransactionSettingsStyle>
      <Typography className="transactioin-settings-slipage-tolerance" variant="body1">Slippage Tolerance <HelpIcon /></Typography>
      <Box className="transaction-settings-slipage-tolerance-switcher">
        {
          splipageToleranceValues.map(value => (
            <Box
              key={value}
              data-testid={`splipageTolerance-test-${value}`}
              className={
                cn({
                  'switcher-box': true,
                  'selected': value === splipageTolerance,
                })
              }
              onClick={() => { onChangeTolerance(value); }}
            >
              <Typography variant="body1">{value}%</Typography>
            </Box>
          ))
        }
        <InputComponent
          className="slipage-tolerance-input"
          value="0.75%"
          disabled
        />
      </Box>

      <Typography className="transaction-deadline-label" variant="body1">Transaction deadline <HelpIcon /></Typography>
      <Box className="transaction-deadline-input">
        <InputComponent
          defaultValue={transactionDeadline}
          data-testid='transaction-deadline-test'
          type="number"
          onChange={onChangeDeadline}
        />
        <Typography variant="body2">minutes</Typography>
      </Box>
    </TransactionSettingsStyle>
  );
};