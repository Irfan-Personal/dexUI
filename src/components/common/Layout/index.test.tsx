import { ThemeProvider } from '@mui/material';
import { render } from '@testing-library/react';
import React from 'react';
import { withLayout } from '.';
import { lightTheme } from 'styles/theme';
import { Provider } from 'react-redux';
import { AppActions, store } from 'store';

const MockPage: React.FC = () => {
  return (
    <>Mock Page!</>
  );
};

const Component = withLayout(MockPage);

function renderComponent() {
  return render(
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <Component />
      </ThemeProvider>
    </Provider>
  );
}

describe('Layout component', () => {
  it('checks if the withLayout component matches the snapshot', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  it('transactionError', () => {
    store.dispatch(AppActions.transaction.getTransactionsFailure({
      error: 'true',
      message: 'transactionError',
    }));
    const { getByText } = renderComponent();
    expect(getByText('Mock Page!')).toBeInTheDocument();
  });
});

