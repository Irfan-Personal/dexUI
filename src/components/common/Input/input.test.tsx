import { ThemeProvider } from '@mui/material';
import { render } from '@testing-library/react';
import React from 'react';
import { lightTheme } from 'styles/theme';
import { InputComponent, InputProps } from '.';

function renderComponent(props: InputProps) {
  return render(
    <ThemeProvider theme={lightTheme}>
      <InputComponent {...props} />
    </ThemeProvider>
  );
}

describe('Input component', () => {
  const mockProps = {
    name: 'input',
    label: 'label',
    type: 'number',
    maxLength: 100,
    register: jest.fn(),
    watch: jest.fn(),
    variant: 'outlined',
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