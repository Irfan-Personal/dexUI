import { ThemeProvider } from '@mui/material';
import { fireEvent, render } from '@testing-library/react';
import { ITokensTableProps, TokensTable } from './index';
import React from 'react';
import { lightTheme } from 'styles/theme';
import { mockTokenDetails } from '__mock__';

function renderComponent(props: ITokensTableProps) {
  return render(
    <ThemeProvider theme={lightTheme}>
      <TokensTable {...props} />
    </ThemeProvider>
  );
}

describe('TokensTable component', () => {
  const mockProps: ITokensTableProps = {
    onChangeRowCount: jest.fn(),
    onNextPage: jest.fn(),
    onPreviousPage: jest.fn(),
    onSortClick: jest.fn(),
    onAddLiquidity: jest.fn(),
    onSelectToken: jest.fn(),
    onSwap: jest.fn(),
    tokens: [...mockTokenDetails],
    limit: 10,
    page: 1,
    totalPages: 1,
    sortKey: '',
    isAsc: false,
    pagination: true,
  };

  it('checks if the component matches the snapshot', () => {
    const { container } = renderComponent(mockProps);
    expect(container).toMatchSnapshot();
  });

  it('test selectToken', () => {
    const { getAllByTestId } = renderComponent(mockProps);
    fireEvent.click(getAllByTestId('table-token-row')[0]);
    expect(mockProps.onSelectToken).toBeCalledWith(mockTokenDetails[0].tokenID);
  });

  it('test click addLiquidity', () => {
    const { getByTestId } = renderComponent(mockProps);
    fireEvent.click(getByTestId(`addLiquidity-test-${mockTokenDetails[0].tokenID}`));
    expect(mockProps.onAddLiquidity).toBeCalled();
  });

  it('test click swap', () => {
    const { getByTestId } = renderComponent(mockProps);
    fireEvent.click(getByTestId(`swap-test-${mockTokenDetails[0].tokenID}`));
    expect(mockProps.onSwap).toBeCalled();
  });
});
