import React from 'react';
import { ThemeProvider } from '@mui/material';
import { fireEvent, render } from '@testing-library/react';
import { LiskDexLP, ILiskDexLProps } from './index';
import { lightTheme } from 'styles/theme';
import { mockPools } from '__mock__/pool.mock';

function renderComponent(props: ILiskDexLProps) {
  return render(
    <ThemeProvider theme={lightTheme} >
      <LiskDexLP {...props} />
    </ThemeProvider>
  );
}

describe('LiskDexLP component', () => {
  const mockProps: ILiskDexLProps = {
    pools: mockPools,
    gettingPools: false,
    gotPools: false,
    onPreview: jest.fn(),
    onPreviewRemove: jest.fn(),
  };

  it('checks if the component matches the b  snapshot', () => {
    const { container } = renderComponent(mockProps);
    expect(container).toMatchSnapshot();
  });

  it('click on preview', () => {
    const { getByTestId } = renderComponent(mockProps);
    setTimeout(() => {
      fireEvent.click(getByTestId('pool-component-test-0'));
      fireEvent.click(getByTestId('increase-liquidity-test'));
      expect(getByTestId('increase-liquidity-modal-test')).toBeInTheDocument();
    }, 1000);
  });
});
