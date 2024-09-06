import { ThemeProvider } from '@mui/material';
import { render } from '@testing-library/react';
import React from 'react';
import { lightTheme } from 'styles/theme';
import { Provider } from 'react-redux';
import { store } from 'store';
import { ProposalContainer } from '.';

function renderComponent() {
  return render(
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <ProposalContainer />
      </ThemeProvider>
    </Provider>
  );
}

describe('Info container', () => {
  it('should render correctly', () => {
    const { getAllByText } = renderComponent();
    expect(getAllByText('Vote')[0]).toBeInTheDocument();
  });
});