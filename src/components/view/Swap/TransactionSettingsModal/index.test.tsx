import React from 'react';
import { ThemeProvider } from '@mui/material';
import { fireEvent, render } from '@testing-library/react';
import { TransactionSettingsModal, ITransactionSettingsModalProps } from './index';
import { lightTheme } from 'styles/theme';

function renderComponent(props: ITransactionSettingsModalProps) {
  return render(
    <ThemeProvider theme={lightTheme}>
      <TransactionSettingsModal {...props} />
    </ThemeProvider>
  );
}

describe('TransactionSettingsModal', () => {
  const mockProps: ITransactionSettingsModalProps = {
    splipageTolerance: 0.1,
    transactionDeadline: 20,
    onSave: jest.fn(),
    onClose: jest.fn(),
  };

  it('checks if the component matches the snapshot', () => {
    const { container } = renderComponent(mockProps);
    expect(container).toMatchSnapshot();
  });

  it('click save button', () => {
    const { getByTestId } = renderComponent(mockProps);

    const button = getByTestId('transaction-settings-save-test');
    fireEvent.click(button);

    expect(mockProps.onSave).toBeCalled();
  });

  it('click close button', () => {
    const { getByTestId } = renderComponent(mockProps);

    const button = getByTestId('transaction-settings-cancel-test');
    fireEvent.click(button);

    expect(mockProps.onClose).toBeCalled();
  });
});
