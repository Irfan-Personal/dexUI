import React from 'react';
import { ThemeProvider } from '@mui/material';
import { fireEvent, render } from '@testing-library/react';
import { RemoveLiquidityModal, IRemoveLiquidityModalProps } from './index';
import { lightTheme } from 'styles/theme';
import { mockPool } from '__mock__/pool.mock';

function renderComponent(props: IRemoveLiquidityModalProps) {
  return render(
    <ThemeProvider theme={lightTheme} >
      <RemoveLiquidityModal {...props} />
    </ThemeProvider>
  );
}

describe('RemoveLiquidityModal component', () => {
  const mockProps: IRemoveLiquidityModalProps = {
    pool: mockPool,
    onClose: jest.fn(),
    onConfirm: jest.fn(),
  };

  it('checks if the component matches the snapshot', () => {
    const { container } = renderComponent(mockProps);
    expect(container).toMatchSnapshot();
  });

  it('confirm click work', () => {
    const { getByTestId } = renderComponent(mockProps);
    fireEvent.click(getByTestId('remove-liquidity-modal-button-test'));

    expect(mockProps.onConfirm).toBeCalled();
  });

  it('cancel click work', () => {
    const { getByTestId } = renderComponent(mockProps);
    fireEvent.click(getByTestId('remove-liquidity-modal-cancel-test'));

    expect(mockProps.onClose).toBeCalled();
  });
});
