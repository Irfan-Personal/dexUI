import React from 'react';
import { render } from '@testing-library/react';
import styled from '@emotion/styled';
import { ThemeProvider } from '@mui/material';
import { lightTheme } from 'styles/theme';
import { Chart, IChartProps } from '.';

const chartData = [
  { x: 1.1, y: 50 },
  { x: 1.2, y: 100 },
  { x: 1.3, y: 120 },
  { x: 1.4, y: 440 },
  { x: 1.5, y: 40 },
  { x: 1.6, y: 130 },
  { x: 1.7, y: 240 },
  { x: 1.8, y: 435 },
  { x: 1.9, y: 333 },
  { x: 2.0, y: 223 },
];


const ChartStyle = styled('div')(() => {
  return {
    '.chart-example': {
      width: '12.5rem',
    }
  };
});

function renderComponent(props: IChartProps) {
  return render(
    <ThemeProvider theme={lightTheme}>
      <ChartStyle>
        <Chart className='chart-example' {...props} />
      </ChartStyle>
    </ThemeProvider>
  );
}

describe('Button component', () => {
  const mockProps: IChartProps = {
    data: chartData,
    gradient: true,
    dots: true,
  };

  it('checks if the component matches the snapshot', () => {
    const { container } = renderComponent(mockProps);
    expect(container).toMatchSnapshot();
  });
});