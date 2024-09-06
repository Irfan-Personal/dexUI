import React from 'react';
import { ThemeProvider } from '@mui/material';
import { fireEvent, render } from '@testing-library/react';
import { SwapView, ISwapViewProps } from './index';
import { lightTheme } from 'styles/theme';
import { mockTokenBalances, mockTokens } from '__mock__';
import { Provider } from 'react-redux';
import { store } from 'store';

function renderComponent(props: ISwapViewProps) {
  return render(
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <SwapView {...props} />
      </ThemeProvider>
    </Provider>
  );
}

describe('Swap', () => {
  const mockProps: ISwapViewProps = {
    account: {
      chainId: 'lisk:00400',
      publicKey: 'f97c8daab9e9bbcbc6e3dec7399d05b27803fccc20ce75b7576847bde94e6802',
      address: 'lsk6ccnusyfemspn8pfhgm86wumczqsjbnvdste85',
    },
    tokens: mockTokens,
    tokenBalances: mockTokenBalances,
    closeTransactionModal: false,
    onConfirmSwap: jest.fn(),
    getToken2FiatConversion: jest.fn(),
  };

  it('checks if the component matches the snapshot', () => {
    const { container } = renderComponent(mockProps);
    expect(container).toMatchSnapshot();
  });

  it('checks if select token works fine', () => {
    const { getByText, getByTestId } = renderComponent(mockProps);

    const selectTokenButton = getByText('Select a token');
    fireEvent.click(selectTokenButton);
    expect(getByText('Select token')).toBeInTheDocument();

    fireEvent.click(getByTestId('token-item-DEX'));
  });

  it('click swap button to open confirm modal', () => {
    const { getByText, getByTestId } = renderComponent(mockProps);

    const selectTokenButton = getByText('Select a token');
    fireEvent.click(selectTokenButton);
    fireEvent.click(getByTestId('token-item-DEX'));
    fireEvent.click(getByTestId('swap-from-percent-25'));
    fireEvent.click(getByTestId('swap-from-percent-50'));
    fireEvent.click(getByTestId('swap-from-percent-max'));
    fireEvent.click(getByTestId('reverse-swap-test'));
    fireEvent.click(getByTestId('swap-from-percent-25'));
    fireEvent.click(getByTestId('swap-from-percent-50'));
    fireEvent.click(getByTestId('swap-from-percent-max'));
    fireEvent.click(getByTestId('swap-button'));

    expect(getByText('Trade tokens in an instant')).toBeInTheDocument();

    // fireEvent.click(getByTestId('swap-confirm-modal-button-test'));

    // expect(mockProps.onConfirmSwap).toBeCalled();
  });

  it('click setting button to open settings modal', () => {
    const { getByText, getByTestId } = renderComponent(mockProps);

    fireEvent.click(getByTestId('swap-setting-button'));
    expect(getByText('Transaction Settings')).toBeInTheDocument();

    fireEvent.click(getByTestId('transaction-settings-save-test'));
  });

  it('close transaction modal', () => {
    const { getByText } = renderComponent({
      ...mockProps,
      closeTransactionModal: true,
    });
    expect(getByText('Swap')).toBeInTheDocument();
  });

});
