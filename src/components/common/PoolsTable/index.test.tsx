import { ThemeProvider } from '@mui/material';
import { fireEvent, render } from '@testing-library/react';
import { IPoolsTableProps, PoolsTable } from './index';
import React from 'react';
import { lightTheme } from 'styles/theme';
import { mockPoolDetails } from '__mock__';

function renderComponent(props: IPoolsTableProps) {
  return render(
    <ThemeProvider theme={lightTheme}>
      <PoolsTable {...props} />
    </ThemeProvider>
  );
}

describe('PoolsTable component', () => {
  const mockProps: IPoolsTableProps = {
    onChangeRowCount: jest.fn(),
    onNextPage: jest.fn(),
    onPreviousPage: jest.fn(),
    onSortClick: jest.fn(),
    onAddLiquidity: jest.fn(),
    onSelectPool: jest.fn(),
    onSwap: jest.fn(),
    pools: [...mockPoolDetails],
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

  it('test selectPool', () => {
    const { getAllByTestId } = renderComponent(mockProps);
    fireEvent.click(getAllByTestId('table-pool-row')[0]);
    expect(mockProps.onSelectPool).toBeCalledWith(mockPoolDetails[0].poolID);
  });

  it('test click addLiquidity', () => {
    const { getByTestId } = renderComponent(mockProps);
    fireEvent.click(getByTestId(`addLiquidity-test-${mockPoolDetails[0].poolID}`));
    expect(mockProps.onAddLiquidity).toBeCalled();
  });

  it('test click swap', () => {
    const { getByTestId } = renderComponent(mockProps);
    fireEvent.click(getByTestId(`swap-test-${mockPoolDetails[0].poolID}`));
    expect(mockProps.onSwap).toBeCalled();
  });
});
