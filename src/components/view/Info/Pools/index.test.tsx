import React from 'react';
import { ThemeProvider } from '@mui/material';
import { render } from '@testing-library/react';
import { lightTheme } from 'styles/theme';
import { mockPoolDetails } from '__mock__';
import { IPoolsComponentProps, PoolsComponent } from '.';
import { getPoolToken0, getPoolToken1 } from 'utils';

function renderComponent(props: IPoolsComponentProps) {
  return render(
    <ThemeProvider theme={lightTheme}>
      <PoolsComponent {...props} />
    </ThemeProvider>
  );
}

describe('Info Pools component', () => {
  const props: IPoolsComponentProps = {
    poolDetails: mockPoolDetails,
    conversionRates: {},
    poolID: '',
    onSwap: jest.fn(),
    onAddLiquidity: jest.fn(),
    onSelectPool: jest.fn(),
    onSelectToken: jest.fn(),
    getToken2FiatConversion: jest.fn(),
  };

  it('checks if pools component renders pools correctly', () => {
    const { getAllByTestId } = renderComponent(props);
    expect(getAllByTestId('table-pool-row')).toHaveLength(props.poolDetails.length);
  });

  it('checks if pools component renders a pool correctly', () => {
    const { getAllByText } = renderComponent({
      ...props,
      poolID: props.poolDetails[0].poolID,
    });
    expect(getAllByText(`${getPoolToken0(props.poolDetails[0].poolName)}/${getPoolToken1(props.poolDetails[0].poolName)}`)[0]).toBeInTheDocument();
  });
});
