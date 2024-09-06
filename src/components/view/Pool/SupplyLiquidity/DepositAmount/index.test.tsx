import React from 'react';
import { ThemeProvider } from '@mui/material';
import { fireEvent, render } from '@testing-library/react';
import { DepositAmount, IDepositAmountProps } from './index';
import { lightTheme } from 'styles/theme';
import { mockTokens } from '__mock__';

function renderComponent(props: IDepositAmountProps) {
  return render(
    <ThemeProvider theme={lightTheme} >
      <DepositAmount {...props} />
    </ThemeProvider>
  );
}

describe('DepositAmount component', () => {
  const mockProps: IDepositAmountProps = {
    balance: 4521.425,
    tokenAmount: 0,
    token: mockTokens[0],
    onChange: jest.fn(),
  };

  it('checks if the component matches the snapshot', () => {
    const { container } = renderComponent(mockProps);
    expect(container).toMatchSnapshot();
  });

  it('select amount works', () => {
    const { getByDisplayValue, getByTestId } = renderComponent(mockProps);

    fireEvent.click(getByTestId('DEX-amount-percent-max'));

    expect(getByDisplayValue(mockProps.balance)).toBeInTheDocument();
    expect(mockProps.onChange).toBeCalled();
  });
});
