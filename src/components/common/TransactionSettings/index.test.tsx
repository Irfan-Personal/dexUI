import React from 'react';
import { ThemeProvider } from '@mui/material';
import { fireEvent, render } from '@testing-library/react';
import { TransactionSettings, ITransactionSettingsProps } from './index';
import { lightTheme } from 'styles/theme';

function renderComponent(props: ITransactionSettingsProps) {
  return render(
    <ThemeProvider theme={lightTheme}>
      <TransactionSettings {...props} />
    </ThemeProvider>
  );
}

describe('TransactionSettings component', () => {
  const mockProps: ITransactionSettingsProps = {
    splipageTolerance: 0.5,
    transactionDeadline: 100,
    onChangeSplipageTolerance: jest.fn(),
    onChangeTransactionDeadline: jest.fn(),
  };

  it('checks if the component matches the snapshot', () => {
    const { container } = renderComponent(mockProps);
    expect(container).toMatchSnapshot();
  });

  it('test splipageTolerance change', () => {
    const { getByTestId } = renderComponent(mockProps);
    const button = getByTestId('splipageTolerance-test-1');
    fireEvent.click(button);
    expect(mockProps.onChangeSplipageTolerance).toBeCalledWith(1);
  });


  it('test transactionDeadline change', () => {
    const { getByTestId } = renderComponent(mockProps);
    const input = getByTestId('transaction-deadline-test').querySelector('.MuiInputBase-input');
    fireEvent.change(input, { target: { value: 1000 } });
    expect(mockProps.onChangeTransactionDeadline).toBeCalledWith(1000);
  });
});
