import React from 'react';
import { ThemeProvider } from '@mui/material';
import { fireEvent, render } from '@testing-library/react';
import { lightTheme } from 'styles/theme';
import { mockPools } from '__mock__/pool.mock';
import { IRemoveLiquidityModalProps, RemoveLiquidityModal } from '.';

function renderComponent(props: IRemoveLiquidityModalProps) {
  return render(
    <ThemeProvider theme={lightTheme} >
      <RemoveLiquidityModal {...props} />
    </ThemeProvider>
  );
}

describe('LiskDexLP component', () => {
  const mockProps: IRemoveLiquidityModalProps = {
    pool: mockPools[0],
    onPreview: jest.fn(),
    onClose: jest.fn(),
  };

  it('checks if the component matches the b  snapshot', () => {
    const { container } = renderComponent(mockProps);
    expect(container).toMatchSnapshot();
  });

  it('click on preview', () => {
    const { getByTestId } = renderComponent(mockProps);
    fireEvent.click(getByTestId('remove-liquidity-modal-preview-test'));
    expect(mockProps.onPreview).toBeCalled();
  });

  it('click on close', () => {
    const { getByTestId } = renderComponent(mockProps);
    fireEvent.click(getByTestId('remove-liquidity-modal-cancel-test'));
    expect(mockProps.onClose).toBeCalled();
  });
});
