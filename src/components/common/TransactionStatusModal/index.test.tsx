import { ThemeProvider } from '@mui/material';
import { fireEvent, render } from '@testing-library/react';
import { ITransactionStatusModalProps, TransactionStatusModal } from './index';
import React from 'react';
import { lightTheme } from 'styles/theme';
import { TransactionStatus, TransactionType } from 'consts';

function renderComponent(props: ITransactionStatusModalProps) {
  return render(
    <ThemeProvider theme={lightTheme}>
      <TransactionStatusModal {...props} />
    </ThemeProvider>
  );
}

describe('TransactionStatusModal', () => {
  const mockProps = {
    status: TransactionStatus.SUCCESS,
    type: TransactionType.SWAP,
    onClose: jest.fn(),
  };
  it('checks if the component matches the snapshot', () => {
    const { container } = renderComponent(mockProps);
    expect(container).toMatchSnapshot();
  });

  it('test for swap Pending', () => {
    const { getByText } = renderComponent({
      status: TransactionStatus.PENDING,
      type: TransactionType.SWAP,
    });
    expect(getByText('Swapping tokens...')).toBeInTheDocument();
  });

  it('test for swap Failure', () => {
    const { getByText, getByTestId } = renderComponent({
      ...mockProps,
      status: TransactionStatus.FAILURE,
      type: TransactionType.SWAP,
    });
    expect(getByText('Failed to swap')).toBeInTheDocument();
    fireEvent.click(getByTestId('transaction-status-modal-close'));
    expect(mockProps.onClose).toBeCalled();
  });

  it('test for supplyLiquidity Pending', () => {
    const { getByText } = renderComponent({
      status: TransactionStatus.PENDING,
      type: TransactionType.SUPPLY_LIQUIDITY,
    });
    expect(getByText('Supplying liquidity...')).toBeInTheDocument();
  });

  it('test for supplyLiquidity Success', () => {
    const { getByText } = renderComponent({
      status: TransactionStatus.SUCCESS,
      type: TransactionType.SUPPLY_LIQUIDITY,
    });
    expect(getByText('Successfully supplied liquidity.')).toBeInTheDocument();
  });

  it('test for supplyLiquidity Failure', () => {
    const { getByText } = renderComponent({
      status: TransactionStatus.FAILURE,
      type: TransactionType.SUPPLY_LIQUIDITY,
    });
    expect(getByText('Failed to supply liquidity')).toBeInTheDocument();
  });

  it('test for increaseLiquidity Pending', () => {
    const { getByText } = renderComponent({
      status: TransactionStatus.PENDING,
      type: TransactionType.INCREASE_LIQUIDITY,
    });
    expect(getByText('Supplying liquidity...')).toBeInTheDocument();
  });

  it('test for increaseLiquidity Success', () => {
    const { getByText } = renderComponent({
      status: TransactionStatus.SUCCESS,
      type: TransactionType.INCREASE_LIQUIDITY,
    });
    expect(getByText('Successfully increased liquidity.')).toBeInTheDocument();
  });

  it('test for increaseLiquidity Failure', () => {
    const { getByText } = renderComponent({
      status: TransactionStatus.FAILURE,
      type: TransactionType.INCREASE_LIQUIDITY,
    });
    expect(getByText('Failed to increase liquidity')).toBeInTheDocument();
  });

  it('test for removeLiquidity Pending', () => {
    const { getByText } = renderComponent({
      status: TransactionStatus.PENDING,
      type: TransactionType.REMOVE_LIQUIDITY,
    });
    expect(getByText('Removing liquidity...')).toBeInTheDocument();
  });

  it('test for removeLiquidity Success', () => {
    const { getByText } = renderComponent({
      status: TransactionStatus.SUCCESS,
      type: TransactionType.REMOVE_LIQUIDITY,
    });
    expect(getByText('Successfully removed liquidity.')).toBeInTheDocument();
  });

  it('test for removeLiquidity Failure', () => {
    const { getByText } = renderComponent({
      status: TransactionStatus.FAILURE,
      type: TransactionType.REMOVE_LIQUIDITY,
    });
    expect(getByText('Failed to remove')).toBeInTheDocument();
  });

  it('cancel button click', () => {
    const { getByText } = renderComponent(mockProps);

    const closeButton = getByText('Close');
    fireEvent.click(closeButton);

    expect(mockProps.onClose).toBeCalled();
  });
});

