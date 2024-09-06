import { ThemeProvider } from '@mui/material';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { IPaginationComponentProps, PaginationComponent } from '.';
import { lightTheme } from 'styles/theme';

function renderComponent(props: IPaginationComponentProps) {
  return render(
    <ThemeProvider theme={lightTheme}>
      <PaginationComponent {...props} />
    </ThemeProvider>
  );
}

describe('Pagination component', () => {
  const mockProps: IPaginationComponentProps = {
    onChangeRowCount: jest.fn(),
    onNextPage: jest.fn(),
    onPreviousPage: jest.fn(),
    limit: 10,
    page: 1,
    totalPages: 5,
  };

  it('checks if the withLayout component matches the snapshot', () => {
    const { container } = renderComponent(mockProps);
    expect(container).toMatchSnapshot();
  });

  it('test previous page', () => {
    const { getByTestId } = renderComponent({
      ...mockProps,
      page: 2,
    });
    fireEvent.click(getByTestId('test-previous-page'));
    expect(mockProps.onPreviousPage).toBeCalled();
  });


  it('test next page', () => {
    const { getByTestId } = renderComponent({
      ...mockProps,
      page: 2,
    });
    fireEvent.click(getByTestId('test-next-page'));
    expect(mockProps.onPreviousPage).toBeCalled();
  });
});

