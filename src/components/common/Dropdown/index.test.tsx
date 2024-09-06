import { MenuItem, ThemeProvider } from '@mui/material';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { lightTheme } from 'styles/theme';
import { DropdownComponent, IDropdownComponentProps } from '.';

function renderComponent(props: IDropdownComponentProps) {
  return render(
    <ThemeProvider theme={lightTheme}>
      <DropdownComponent {...props}>
        <MenuItem data-testid={'test-item-1'} value={1}>Option 1</MenuItem>
        <MenuItem data-testid={'test-item-2'} value={2}>Option 2</MenuItem>
        <MenuItem data-testid={'test-item-3'} value={3}>Option 3</MenuItem>
      </DropdownComponent>
    </ThemeProvider>
  );
}

describe('Dropdown component', () => {
  const mockProps: IDropdownComponentProps = {
    label: 'Test Label',
    onChange: jest.fn(),
    value: 2
  };

  it('checks if the component matches the snapshot', () => {
    const { container } = renderComponent(mockProps);
    expect(container).toMatchSnapshot();
  });

  it('renders label', () => {
    const { getByRole } = renderComponent(mockProps);
    fireEvent.click(getByRole('button'));
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });
});