import { ThemeProvider } from '@mui/material';
import { fireEvent, render } from '@testing-library/react';
import { ITransactionsTableProps, TransactionsTable } from './index';
import React from 'react';
import { lightTheme } from 'styles/theme';
import { mockTokens, mockTransactions } from '__mock__';

function renderComponent(props: ITransactionsTableProps) {
  return render(
    <ThemeProvider theme={lightTheme}>
      <TransactionsTable {...props} />
    </ThemeProvider>
  );
}

describe('TransactionsTable component', () => {
  const mockProps: ITransactionsTableProps = {
    onChangeRowCount: jest.fn(),
    onNextPage: jest.fn(),
    onPreviousPage: jest.fn(),
    onChangeCommand: jest.fn(),
    transactions: [...mockTransactions],
    availableTokens: mockTokens,
    limit: 10,
    page: 1,
    totalPages: 1,
  };

  it('checks if the component matches the snapshot', () => {
    const { container } = renderComponent(mockProps);
    expect(container).toMatchSnapshot();
  });

  it('test previous page', () => {
    const { getByTestId } = renderComponent({
      ...mockProps,
      page: 2,
      totalPages: 5,
    });

    fireEvent.click(getByTestId('previous-page-test'));
    expect(mockProps.onPreviousPage).toBeCalled();
  });

  it('test next page', () => {
    const { getByTestId } = renderComponent({
      ...mockProps,
      page: 2,
      totalPages: 5,
    });

    fireEvent.click(getByTestId('transaction-table-next-page-test'));
    expect(mockProps.onNextPage).toBeCalled();
  });
});
