import React from 'react';
import { ThemeProvider } from '@mui/material';
import { fireEvent, render } from '@testing-library/react';
import { ISearchComponentProps, SearchComponent } from './index';
import { lightTheme } from 'styles/theme';
import { mockPoolDetails, mockTokenDetails } from '__mock__';

function renderComponent(props: ISearchComponentProps) {
  return render(
    <ThemeProvider theme={lightTheme}>
      <SearchComponent {...props} />
    </ThemeProvider>
  );
}

describe('SearchComponent page', () => {
  const mockProps: ISearchComponentProps = {
    onChangeSearchFilter: jest.fn(),
  };

  it('check if the component matches the snapshot', () => {
    const { container } = renderComponent(mockProps);
    expect(container).toMatchSnapshot();
  });

  it('check search input works fine', () => {
    const { getByTestId } = renderComponent(mockProps);
    fireEvent.input(getByTestId('search-input-test'), 'LSK');
    expect(mockProps.onChangeSearchFilter).toBeCalled();
  });

  it('check view pools more works fine', () => {
    const { getByTestId, getByPlaceholderText } = renderComponent({
      pools: mockPoolDetails,
      ...mockProps
    });
    const input = getByPlaceholderText('Search tokens or pools...');
    fireEvent.change(input, { target: { value: 'LSK' } });
    fireEvent.click(getByTestId('pools-view-more-test'));
    expect(input).toHaveValue('');
  });

  it('check view tokens more works fine', () => {
    const { getByTestId, getByPlaceholderText } = renderComponent({
      tokens: mockTokenDetails,
      ...mockProps
    });
    const input = getByPlaceholderText('Search tokens or pools...');
    fireEvent.change(input, { target: { value: 'LSK' } });
    fireEvent.click(getByTestId('tokens-view-more-test'));
    expect(input).toHaveValue('');
  });
});
