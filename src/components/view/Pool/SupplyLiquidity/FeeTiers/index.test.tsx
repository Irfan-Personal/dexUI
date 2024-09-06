import React from 'react';
import { ThemeProvider } from '@mui/material';
import { fireEvent, render } from '@testing-library/react';
import { FeeTiers, IFeeTiersProps } from './index';
import { lightTheme } from 'styles/theme';

function renderComponent(props: IFeeTiersProps) {
  return render(
    <ThemeProvider theme={lightTheme} >
      <FeeTiers {...props} />
    </ThemeProvider>
  );
}

describe('FeeTiers component', () => {
  const mockProps: IFeeTiersProps = {
    tierValue: 0,
    onChange: jest.fn(),
  };

  it('checks if the component matches the snapshot', () => {
    const { container } = renderComponent(mockProps);
    expect(container).toMatchSnapshot();
  });

  it('select amount works', () => {
    const { getByTestId } = renderComponent(mockProps);

    fireEvent.click(getByTestId('fee-tier-0.01'));
    expect(mockProps.onChange).toBeCalledWith(0.01);

    fireEvent.click(getByTestId('fee-tier-0.05'));
    expect(mockProps.onChange).toBeCalledWith(0.05);

    fireEvent.click(getByTestId('fee-tier-0.3'));
    expect(mockProps.onChange).toBeCalledWith(0.3);

    fireEvent.click(getByTestId('fee-tier-1'));
    expect(mockProps.onChange).toBeCalledWith(1);
  });
});
