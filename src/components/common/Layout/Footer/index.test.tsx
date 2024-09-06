import { ThemeProvider } from '@mui/material';
import { render } from '@testing-library/react';
import React from 'react';
import { lightTheme } from 'styles/theme';
import { Footer } from '.';

function renderComponent() {
  return render(
    <ThemeProvider theme={lightTheme}>
      <Footer />
    </ThemeProvider>
  );
}

describe('Footer component', () => {
  it('checks if the component matches the snapshot', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });
});
