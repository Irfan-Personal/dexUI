import { ThemeProvider } from '@mui/material';
import { render } from '@testing-library/react';
import React from 'react';
import { lightTheme } from 'styles/theme';
import { HistoryComponent, IHistoryComponentProps } from '.';
import { mockTokens } from '__mock__';
import { Provider } from 'react-redux';
import { store } from 'store';
import { act } from 'react-dom/test-utils';

function renderComponent(props: IHistoryComponentProps) {
  return render(
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <HistoryComponent {...props} />
      </ThemeProvider>
    </Provider>
  );
}

describe('History component', () => {
  const mockProps: IHistoryComponentProps = {
    accountAddress: 'lskdxc4ta5j43jp9ro3f8zqbxta9fn6jwzjucw7yt',
    accountTokens: mockTokens,
  };
  it('checks if the component matches the snapshot', () => {
    act(() => {
      renderComponent(mockProps);
    });
    expect(screen).toMatchSnapshot();
  });
});