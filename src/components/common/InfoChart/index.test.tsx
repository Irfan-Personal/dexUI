import { ThemeProvider } from '@mui/material';
import { fireEvent, render } from '@testing-library/react';
import { IInfoChartProps, InfoChart } from './index';
import React from 'react';
import { lightTheme } from 'styles/theme';

function renderComponent(props: IInfoChartProps) {
  return render(
    <ThemeProvider theme={lightTheme}>
      <InfoChart {...props} />
    </ThemeProvider>
  );
}

describe('InfoChart component', () => {
  const mockProps: IInfoChartProps = {
    chartData: [
      {
        time: new Date(2023, 1, 1, 4, 50),
        price: 100,
      },
      {
        time: new Date(2023, 4, 1, 4, 50),
        price: 100,
      },
      {
        time: new Date(2023, 4, 28, 1, 40),
        price: 100,
      },
      {
        time: new Date(2023, 4, 29, 5, 30),
        price: 100,
      },
    ],
    tabs: ['Liquidity', 'TVL'],
    infoChartSummary: [
      {
        title: 'LSK Price',
        value: '$1.007',
        changePercent: 0.05,
      },
      {
        title: 'Total Liquidity',
        value: '$14.4m',
        changePercent: 2.32,
      },
    ],
    onTabChange: jest.fn(),
  };

  it('check period button works', () => {
    const { getByTestId } = renderComponent(mockProps);
    fireEvent.click(getByTestId('peroid-unit-D-test'));
    expect(getByTestId('volume-test')).toHaveTextContent('$100');

    fireEvent.click(getByTestId('peroid-unit-W-test'));
    expect(getByTestId('volume-test')).toHaveTextContent('$200');

    fireEvent.click(getByTestId('peroid-unit-M-test'));
    expect(getByTestId('volume-test')).toHaveTextContent('$300');

    fireEvent.click(getByTestId('peroid-unit-Y-test'));
    expect(getByTestId('volume-test')).toHaveTextContent('$400');
  });

  it('empty', () => {
    const { getByText } = renderComponent({
      ...mockProps,
      chartData: undefined
    });
    expect(getByText('Your favorite pools will be shown here.')).toBeInTheDocument();
  });

  it('check tab change work', () => {
    const { getByTestId } = renderComponent(mockProps);
    expect(getByTestId('tab-test-Liquidity')).toBeInTheDocument();
    fireEvent.click(getByTestId('tab-test-Liquidity'));
    expect(mockProps.onTabChange).toBeCalledWith('Liquidity');
  });
});

