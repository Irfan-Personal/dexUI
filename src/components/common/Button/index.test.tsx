import { ThemeProvider } from '@mui/material';
import { render } from '@testing-library/react';
import React from 'react';
import { lightTheme } from 'styles/theme';
import { ButtonComponent, IButtonProps } from '.';

function renderComponent(props: IButtonProps) {
  return render(
    <ThemeProvider theme={lightTheme}>
      <ButtonComponent {...props} />
    </ThemeProvider>
  );
}

describe('Button component', () => {
  const mockProps: IButtonProps = {
    variant: 'outlined',
    disabled: true,
    loading: true,
  };
  it('checks if the component matches the snapshot', () => {
    const { container } = renderComponent(mockProps);
    expect(container).toMatchSnapshot();
  });
});