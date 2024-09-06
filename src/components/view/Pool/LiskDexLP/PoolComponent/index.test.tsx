import React from 'react';
import { ThemeProvider } from '@mui/material';
import { fireEvent, render } from '@testing-library/react';
import { lightTheme } from 'styles/theme';
import { mockPools } from '__mock__/pool.mock';
import { IPoolComponentProps, PoolComponent } from '.';

function renderComponent(props: IPoolComponentProps) {
  return render(
    <ThemeProvider theme={lightTheme} >
      <PoolComponent {...props} />
    </ThemeProvider>
  );
}

describe('PoolComponentt', () => {
  const mockProps: IPoolComponentProps = {
    pool: mockPools[0],
    onIncreaseLiquidity: jest.fn(),
    onRemoveLiquidity: jest.fn(),
  };

  it('checks if the component matches the  snapshot', () => {
    const { container } = renderComponent(mockProps);
    expect(container).toMatchSnapshot();
  });

  it('click on increaseLiquidity', () => {
    const { getByTestId } = renderComponent(mockProps);
    fireEvent.click(getByTestId('increase-liquidity-test'));
    expect(mockProps.onIncreaseLiquidity).toBeCalled();
  });

  it('click on removeLiquidity', () => {
    const { getByTestId } = renderComponent(mockProps);
    fireEvent.click(getByTestId('remove-liquidity-test'));
    expect(mockProps.onRemoveLiquidity).toBeCalled();
  });

  it('checks test-id propoerty works', () => {
    const { getByTestId } = renderComponent({
      ...mockProps,
      'data-testid': 'pool-component-test',
    });

    expect(getByTestId('pool-component-test')).toBeInTheDocument();
  });
});
