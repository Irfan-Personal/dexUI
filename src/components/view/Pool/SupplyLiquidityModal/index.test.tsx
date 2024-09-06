import React from 'react';
import { ThemeProvider } from '@mui/material';
import { fireEvent, render } from '@testing-library/react';
import { SupplyLiquidityModal, ISupplyLiquidityModalProps } from './index';
import { lightTheme } from 'styles/theme';
import { mockCreatePool } from '__mock__/pool.mock';

function renderComponent(props: ISupplyLiquidityModalProps) {
  return render(
    <ThemeProvider theme={lightTheme} >
      <SupplyLiquidityModal {...props} />
    </ThemeProvider>
  );
}

describe('SupplyLiquidityModal component', () => {
  const mockProps: ISupplyLiquidityModalProps = {
    pool: mockCreatePool,
    moduleCommand: 'createPool',
    onClose: jest.fn(),
    onConfirm: jest.fn(),
  };

  it('checks if the component matches the snapshot', () => {
    const { container } = renderComponent(mockProps);
    expect(container).toMatchSnapshot();
  });

  it('confirm click work', () => {
    const { getByTestId } = renderComponent(mockProps);
    fireEvent.click(getByTestId('supply-liquidity-modal-button-test'));

    expect(mockProps.onConfirm).toBeCalled();
  });

  it('cancel click work', () => {
    const { getByTestId } = renderComponent(mockProps);
    fireEvent.click(getByTestId('supply-liquidity-modal-cancel-test'));

    expect(mockProps.onClose).toBeCalled();
  });
});
