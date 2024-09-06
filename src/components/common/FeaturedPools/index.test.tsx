import { ThemeProvider } from '@mui/material';
import { fireEvent, render } from '@testing-library/react';
import { IFeaturedPoolsProps, FeaturedPools } from './index';
import React from 'react';
import { lightTheme } from 'styles/theme';
import { mockPoolDetails } from '__mock__';
import { getPoolToken0 } from 'utils';

function renderComponent(props: IFeaturedPoolsProps) {
  return render(
    <ThemeProvider theme={lightTheme}>
      <FeaturedPools {...props} />
    </ThemeProvider>
  );
}

describe('FeaturedPools component', () => {
  const mockProps: IFeaturedPoolsProps = {
    poolDetails: mockPoolDetails,
    onSelectPool: jest.fn(),
  };
  it('checks if the component matches the snapshot', () => {
    const { container } = renderComponent(mockProps);
    expect(container).toMatchSnapshot();
  });

  it('check click feature pool item work', () => {
    const { getByTestId } = renderComponent(mockProps);
    fireEvent.click(getByTestId('feature-pool-item-0'));

    expect(mockProps.onSelectPool).toBeCalledWith('0');
  });

  it('check click feature pool rednered correctly', () => {
    const { getAllByText, getByTestId } = renderComponent(mockProps);

    fireEvent.click(getByTestId('scroll-left-button-test'));
    fireEvent.click(getByTestId('scroll-right-button-test'));
    expect(getAllByText(getPoolToken0(mockProps.poolDetails[0].poolName))[0]).toBeInTheDocument();
    expect(getAllByText(getPoolToken0(mockProps.poolDetails[1].poolName))[0]).toBeInTheDocument();
  });
});

