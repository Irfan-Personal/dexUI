import { ThemeProvider } from '@mui/material';
import { render } from '@testing-library/react';
import React from 'react';
import { lightTheme } from 'styles/theme';
import { SearchInputComponent, ISearchInputProps } from '.';

function renderComponent(props: ISearchInputProps) {
  return render(
    <ThemeProvider theme={lightTheme}>
      <SearchInputComponent {...props} />
    </ThemeProvider>
  );
}

describe('SearchInput component', () => {
  const mockProps = {
    name: 'input',
    label: 'label',
  };
  it('checks if the component matches the snapshot', () => {
    const { container } = renderComponent(mockProps);
    expect(container).toMatchSnapshot();
  });

  it('test label works fine', () => {
    const { getByText } = renderComponent(mockProps);
    expect(getByText(mockProps.label)).toBeInTheDocument();
  });
});