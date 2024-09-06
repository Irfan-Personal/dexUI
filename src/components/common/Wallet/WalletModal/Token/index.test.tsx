import { ThemeProvider } from '@mui/material';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { lightTheme } from 'styles/theme';
import { mockTokens } from '__mock__';
import { Provider } from 'react-redux';
import { store } from 'store';
import { ITokenComponentProps, TokenComponent } from '.';

function renderComponent(props: ITokenComponentProps) {
  return render(
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <TokenComponent {...props} />
      </ThemeProvider>
    </Provider>
  );
}

describe('Token component', () => {
  const mockProps: ITokenComponentProps = {
    token: mockTokens[0],
    tokenBalance: 1000,
    fiatBalance: 100,
    onBack: jest.fn(),
  };

  it('checks if the component matches the snapshot', () => {
    const { container } = renderComponent(mockProps);
    expect(container).toMatchSnapshot();
  });

  it('test back button', () => {
    const { getByTestId } = renderComponent(mockProps);
    fireEvent.click(getByTestId('token-back-test'));
    expect(mockProps.onBack).toBeCalled();
  });
});