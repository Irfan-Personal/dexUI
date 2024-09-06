import { ThemeProvider } from '@mui/material';
import { render } from '@testing-library/react';
import React from 'react';
import { lightTheme } from 'styles/theme';
import { Provider } from 'react-redux';
import { store } from 'store';
import { CreateProposalContainer } from '.';

function renderComponent() {
  return render(
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <CreateProposalContainer />
      </ThemeProvider>
    </Provider>
  );
}

describe('CrreatePropsoal container', () => {
  it('should render correctly', () => {
    const { getByText } = renderComponent();
    expect(getByText('Create proposal')).toBeInTheDocument();
  });
});