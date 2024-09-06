import { ThemeProvider } from '@mui/material';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { lightTheme } from 'styles/theme';
import { ConnectWalletModal, IConnectWalletModalProps } from '.';
import { mockChainData, mockChainOptions } from '__mock__';
import { Provider } from 'react-redux';
import { store } from 'store';

function renderComponent(props: IConnectWalletModalProps) {
  return render(
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <ConnectWalletModal {...props} />
      </ThemeProvider>
    </Provider>
  );
}

describe('ConnectWalletModal component', () => {
  const mockProps: IConnectWalletModalProps = {
    chainData: mockChainData,
    uri: '',
    chainOptions: mockChainOptions,
    connected: false,
    onConnect: jest.fn(),
    onClose: jest.fn(),
  };

  it('checks if the component matches the snapshot', () => {
    renderComponent(mockProps);
    expect(screen).toMatchSnapshot();
  });

  it('test connected', () => {
    const { getByText } = renderComponent({
      ...mockProps,
      uri: 'uri',
      connected: true,
    });
    expect(getByText('Connected')).toBeInTheDocument();
  });

  it('test connect', () => {
    const { getByTestId } = renderComponent(mockProps);
    fireEvent.click(getByTestId('button-connect-test'));
    expect(mockProps.onConnect).toBeCalled();
  });

  it('test close', () => {
    const { getByTestId } = renderComponent(mockProps);
    fireEvent.click(getByTestId('button-close-test'));
    expect(mockProps.onClose).toBeCalled();
  });
});