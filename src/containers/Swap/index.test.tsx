import { ThemeProvider } from '@mui/material';
import { render } from '@testing-library/react';
import React from 'react';
import { lightTheme } from 'styles/theme';
import { Provider } from 'react-redux';
import { store } from 'store';
import { SwapContainer } from '.';

function renderComponent() {
  return render(
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <SwapContainer />
      </ThemeProvider>
    </Provider>
  );
}

describe('Swap container', () => {
  it('should render correctly', () => {
    const { getByText } = renderComponent();
    expect(getByText('Swap')).toBeInTheDocument();
  });
});