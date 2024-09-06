import React from 'react';
import { ThemeProvider } from '@mui/material';
import { fireEvent, render } from '@testing-library/react';
import { PriceRange, IPriceRangeProps } from './index';
import { lightTheme } from 'styles/theme';

function renderComponent(props: IPriceRangeProps) {
  return render(
    <ThemeProvider theme={lightTheme} >
      <PriceRange {...props} />
    </ThemeProvider>
  );
}

describe('PriceRange component', () => {
  const mockProps: IPriceRangeProps = {
    label: 'Min Price',
    price: 1.0,
    onChange: jest.fn(),
  };

  it('checks if the component matches the snapshot', () => {
    const { container } = renderComponent(mockProps);
    expect(container).toMatchSnapshot();
  });

  it('plus button click', () => {
    const { getByTestId } = renderComponent(mockProps);

    fireEvent.click(getByTestId('plus-button-test'));
    expect(mockProps.onChange).toBeCalledWith(mockProps.price + 0.001);
  });

  it('minus button click', () => {
    const { getByTestId } = renderComponent(mockProps);

    fireEvent.click(getByTestId('minus-button-test'));
    expect(mockProps.onChange).toBeCalledWith(mockProps.price - 0.001);
  });
});
