import React from 'react';
import { ThemeProvider } from '@mui/material';
import { fireEvent, render } from '@testing-library/react';
import { SupplyLiquidity, ISupplyLiquidityProps } from './index';
import { lightTheme } from 'styles/theme';
import { mockTokenBalances, mockTokens } from '__mock__';

function renderComponent(props: ISupplyLiquidityProps) {
  return render(
    <ThemeProvider theme={lightTheme} >
      <SupplyLiquidity {...props} />
    </ThemeProvider>
  );
}

describe('SupplyLiquidity component', () => {
  const mockProps: ISupplyLiquidityProps = {
    tokens: mockTokens,
    tokenBalances: mockTokenBalances,
    closeTransactionModal: false,
    onPreview: jest.fn(),
  };

  it('checks if the component matches the snapshot', () => {
    const { container } = renderComponent(mockProps);
    expect(container).toMatchSnapshot();
  });

  it('check select token works', () => {
    const { getByTestId } = renderComponent(mockProps);

    fireEvent.click(getByTestId('select-token1-test'));
    expect(getByTestId('token-item-LSK')).toBeInTheDocument();

    fireEvent.click(getByTestId('select-token2-test'));
    expect(getByTestId('token-item-DEX')).toBeInTheDocument();
  });

  it('open confirmation modal', () => {
    const { getByTestId } = renderComponent(mockProps);

    fireEvent.click(getByTestId('select-token1-test'));
    fireEvent.click(getByTestId('token-item-LSK'));

    fireEvent.click(getByTestId('select-token2-test'));
    fireEvent.click(getByTestId('token-item-DEX'));

    fireEvent.input(getByTestId('initial-price-input-test'), 500);
    fireEvent.click(getByTestId('fee-tier-1'));

    setTimeout(() => {
      fireEvent.click(getByTestId('LSK-amount-percent-max'));
      fireEvent.click(getByTestId('ETH-amount-percent-max'));
      fireEvent.click(getByTestId('preview-button-test'));

      fireEvent.click(getByTestId('supply-liquidity-modal-button-test'));
      expect(mockProps.onPreview).toBeInTheDocument();
    }, 1000);

  });
});
