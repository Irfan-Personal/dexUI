import React from 'react';
import { ThemeProvider } from '@mui/material';
import { render } from '@testing-library/react';
import { lightTheme } from 'styles/theme';
import { mockPools } from '__mock__/pool.mock';
import { IPoolViewProps, PoolView } from '.';
import { mockAccount, mockTokenBalances, mockTokens } from '__mock__';

function renderComponent(props: IPoolViewProps) {
  return render(
    <ThemeProvider theme={lightTheme} >
      <PoolView {...props} />
    </ThemeProvider>
  );
}

describe('PoolView component', () => {
  const mockProps: IPoolViewProps = {
    requestingSignature: false,
    pools: mockPools,
    gettingPools: false,
    gotPools: false,
    closeTransactionModal: false,
    account: mockAccount,
    accountTokens: mockTokens,
    tokenBalances: mockTokenBalances,
    createPool: jest.fn(),
    createPosition: jest.fn(),
    addLiquidity: jest.fn(),
    onConfirmRemoveLiquidity: jest.fn(),
  };

  it('checks if the component matches the snapshot', () => {
    const { container } = renderComponent(mockProps);
    expect(container).toMatchSnapshot();
  });
});
