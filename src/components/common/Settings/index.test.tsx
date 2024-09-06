import { ThemeProvider } from '@mui/material';
import { fireEvent, render } from '@testing-library/react';
import { ISettingsModalProps, SettingsModal } from './index';
import React from 'react';
import { lightTheme } from 'styles/theme';
import { ThemeType } from 'consts';

function renderComponent(props: ISettingsModalProps) {
  return render(
    <ThemeProvider theme={lightTheme}>
      <SettingsModal {...props} />
    </ThemeProvider>
  );
}

describe('SettingsModal', () => {
  const mockProps: ISettingsModalProps = {
    settings: {
      splipageTolerance: 0.5,
      transactionDeadline: 10,
      theme: ThemeType.Light,
      currency: 'USD',
    },
    onClose: jest.fn(),
    onSave: jest.fn(),
  };
  it('checks if the component matches the snapshot', () => {
    const { container } = renderComponent(mockProps);
    expect(container).toMatchSnapshot();
  });

  it('cancel button click', () => {
    const { getByTestId } = renderComponent(mockProps);

    const closeButton = getByTestId('settings-modal-cancel-test');
    fireEvent.click(closeButton);

    expect(mockProps.onClose).toBeCalled();
  });

  it('save button click', () => {
    const { getByTestId } = renderComponent(mockProps);

    const closeButton = getByTestId('settings-modal-confirm-test');
    fireEvent.click(closeButton);

    expect(mockProps.onSave).toBeCalled();
  });
});
