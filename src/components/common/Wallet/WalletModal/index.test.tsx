import { ThemeProvider } from '@mui/material';
import { render } from '@testing-library/react';
import React from 'react';
import { lightTheme } from 'styles/theme';
import { WalletModal, IWalletModalProps } from '.';
import { mockAccount } from '__mock__';
import { Provider } from 'react-redux';
import { store } from 'store';

function renderComponent(props: IWalletModalProps) {
  return render(
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <WalletModal {...props} />
      </ThemeProvider>
    </Provider>
  );
}

describe('WalletModal component', () => {
  const mockProps: IWalletModalProps = {
    account: mockAccount,
    onClose: jest.fn(),
    onDisconnect: jest.fn(),
  };

  it('checks if the component matches the snapshot', () => {
    const { container } = renderComponent(mockProps);
    expect(container).toBeInTheDocument();
  });
});