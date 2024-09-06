import React from 'react';
import { ThemeProvider } from '@mui/material';
import { fireEvent, render } from '@testing-library/react';
import { IncreaseLiquidityModal, IIncreaseLiquidityModalProps } from './index';
import { lightTheme } from 'styles/theme';
import { mockPool } from '__mock__/pool.mock';

function renderComponent(props: IIncreaseLiquidityModalProps) {
  return render(
    <ThemeProvider theme={lightTheme} >
      <IncreaseLiquidityModal {...props} />
    </ThemeProvider>
  );
}

describe('IncreaseLiquidityModal component', () => {
  const mockProps: IIncreaseLiquidityModalProps = {
    pool: mockPool,
    onClose: jest.fn(),
    onPreview: jest.fn(),
  };

  it('checks if the component matches the snapshot', () => {
    const { container } = renderComponent(mockProps);
    expect(container).toMatchSnapshot();
  });

  it('click on preview', () => {
    const { getByTestId } = renderComponent(mockProps);
    fireEvent.input(getByTestId('increase-liquidity-token1-input-test'), 200);
    fireEvent.input(getByTestId('increase-liquidity-token2-input-test'), 200);

    setTimeout(() => {
      fireEvent.click(getByTestId('increase-liquidity-modal-preview-test'));
      expect(mockProps.onPreview).toBeCalled();
    }, 1000);

  });

  it('click close', () => {
    const { getByTestId } = renderComponent(mockProps);

    fireEvent.click(getByTestId('increase-liquidity-modal-cancel-test'));

    expect(mockProps.onClose).toBeCalled();
  });
});
