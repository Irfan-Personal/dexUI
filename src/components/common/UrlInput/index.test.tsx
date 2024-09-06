import { ThemeProvider } from '@mui/material';
import { render } from '@testing-library/react';
import React from 'react';
import { lightTheme } from 'styles/theme';
import { IUrlInputProps, UrlInputComponent } from '.';

function renderComponent(props: IUrlInputProps) {
  return render(
    <ThemeProvider theme={lightTheme}>
      <UrlInputComponent {...props} />
    </ThemeProvider>
  );
}

describe('Input component', () => {
  it('checks if the component matches the snapshot', () => {
    const { container } = renderComponent({});
    expect(container).toMatchSnapshot();
  });

  it('test for label property work fine', () => {
    const { getByText } = renderComponent({
      label: 'label',
    });

    expect(getByText('label')).toBeInTheDocument();
  });
});