import { ThemeProvider } from '@mui/material';
import { render } from '@testing-library/react';
import React from 'react';
import { lightTheme } from 'styles/theme';
import { Provider } from 'react-redux';
import { AppActions, store } from 'store';
import { PoolContainer } from '.';
import { mockAccount } from '__mock__';

function renderComponent() {
  return render(
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <PoolContainer />
      </ThemeProvider>
    </Provider>
  );
}

describe('Info container', () => {
  it('should render correctly', () => {
    const { getByText } = renderComponent();
    expect(getByText('Supply Liquidity')).toBeInTheDocument();
    expect(getByText('Your LiskDEX LP')).toBeInTheDocument();
  });

  it('should render account', () => {
    store.dispatch(AppActions.pool.getPoolsSuccess({
      poolsAvailable: {
        poolsAvailable: [
          {
            'type': 'Buffer',
            'data': [4, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 17, 0, 0, 0, 0, 100, 0, 0, 0]
          }
        ]
      }
    }));
    store.dispatch(AppActions.wallet.setAccount(mockAccount));
    const { getByText } = renderComponent();
    expect(getByText('Supply Liquidity')).toBeInTheDocument();
    expect(getByText('Your LiskDEX LP')).toBeInTheDocument();
  });
});