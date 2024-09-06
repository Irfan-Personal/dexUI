import React from 'react';
import { ThemeProvider } from '@mui/material';
import { fireEvent, render } from '@testing-library/react';
import { SelectTokenModal, ISelectTokenModalProps } from './index';
import { lightTheme } from 'styles/theme';
import { mockTokenBalances, mockTokens } from '__mock__';

function renderComponent(props: ISelectTokenModalProps) {
  return render(
    <ThemeProvider theme={lightTheme}>
      <SelectTokenModal {...props} />
    </ThemeProvider>
  );
}

describe('SelectTokenModal', () => {
  const mockProps: ISelectTokenModalProps = {
    tokens: mockTokens,
    tokenBalances: mockTokenBalances,
    onClose: jest.fn(),
    onSelect: jest.fn(),
  };

  it('checks if the component matches the snapshot', () => {
    const { container } = renderComponent(mockProps);
    expect(container).toMatchSnapshot();
  });

  it('click save button', () => {
    const { getByTestId } = renderComponent(mockProps);

    const button = getByTestId('token-item-LSK');
    fireEvent.click(button);

    expect(mockProps.onSelect).toBeCalled();
  });
});
