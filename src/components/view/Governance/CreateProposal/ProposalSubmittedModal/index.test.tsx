import { ThemeProvider } from '@mui/material';
import { fireEvent, render } from '@testing-library/react';
import { ProposalSubmittedModal } from './index';
import React from 'react';
import { lightTheme } from 'styles/theme';

function renderComponent(props: {
  onClose?: () => void
}) {
  return render(
    <ThemeProvider theme={lightTheme}>
      <ProposalSubmittedModal {...props} />
    </ThemeProvider>
  );
}

describe('ProposalSubmittedModal', () => {
  it('checks if the component matches the snapshot', () => {
    const { container } = renderComponent({});
    expect(container).toMatchSnapshot();
  });

  it('cancel button click', () => {
    const onClose = jest.fn();
    const { getByText } = renderComponent({
      onClose,
    });

    const closeButton = getByText('Close');
    fireEvent.click(closeButton);

    expect(onClose).toBeCalled();
  });
});

