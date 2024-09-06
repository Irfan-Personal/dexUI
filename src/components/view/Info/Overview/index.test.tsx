import React from 'react';
import { ThemeProvider } from '@mui/material';
import { render } from '@testing-library/react';
import { lightTheme } from 'styles/theme';
import { mockTokenDetails, mockPoolDetails } from '__mock__';
import { IOverviewComponentProps, OverviewComponent } from '.';

function renderComponent(props: IOverviewComponentProps) {
  return render(
    <ThemeProvider theme={lightTheme}>
      <OverviewComponent {...props} />
    </ThemeProvider>
  );
}

describe('Overview component', () => {
  const props: IOverviewComponentProps = {
    transactions: [],
    tokenDetails: mockTokenDetails,
    poolDetails: mockPoolDetails,
    availableTokens: [],
    onSwap: jest.fn,
    onAddLiquidity: jest.fn,
    onSelectPool: jest.fn,
    onSelectToken: jest.fn,
    onChangeTransactionCommand: jest.fn,
  };

  it('checks if overview component renders pools correctly', () => {
    const { getAllByTestId } = renderComponent(props);
    expect(getAllByTestId('table-pool-row')).toHaveLength(props.poolDetails.length);
  });

  it('checks if overview component renders tokens correctly', () => {
    const { getAllByTestId } = renderComponent(props);
    expect(getAllByTestId('table-token-row')).toHaveLength(props.tokenDetails.length);
  });
});
