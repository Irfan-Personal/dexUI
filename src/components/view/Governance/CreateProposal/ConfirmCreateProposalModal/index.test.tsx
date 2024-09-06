import { ThemeProvider } from '@mui/material';
import { fireEvent, render } from '@testing-library/react';
import { InputComponent } from 'components/common';
import React from 'react';
import { lightTheme } from 'styles/theme';
import { mockProposal } from '__mock__';
import { ConfirmCreateProposalModal, IConfirmCreateProposalModalProps } from '.';

function renderComponent(props: IConfirmCreateProposalModalProps) {
  return render(
    <ThemeProvider theme={lightTheme}>
      <ConfirmCreateProposalModal {...props} />
    </ThemeProvider>
  );
}

describe('SelectProposalTypeComponent', () => {
  it('proposal values entered all input correctly', () => {
    const props: IConfirmCreateProposalModalProps = {
      openTransactionApproval: false,
      proposal: mockProposal,
    };
    renderComponent(props);

    const authorInputComponent = render(
      <ThemeProvider theme={lightTheme}>
        <InputComponent
          label="Author"
          value={mockProposal.author}
          readOnly
        />
      </ThemeProvider>
    );

    expect(authorInputComponent.container).toBeInTheDocument();

    const titleInputComponent = render(
      <ThemeProvider theme={lightTheme}>
        <InputComponent
          label="Title"
          value={mockProposal.title}
          readOnly
        />
      </ThemeProvider>
    );

    expect(titleInputComponent.container).toBeInTheDocument();

    const summaryInputComponent = render(
      <ThemeProvider theme={lightTheme}>
        <InputComponent
          label="Summary"
          value={mockProposal.summary}
          readOnly
        />
      </ThemeProvider>
    );

    expect(summaryInputComponent.container).toBeInTheDocument();

    const descriptionInputComponent = render(
      <ThemeProvider theme={lightTheme}>
        <InputComponent
          label="Description"
          value={mockProposal.description}
          readOnly
        />
      </ThemeProvider>
    );

    expect(descriptionInputComponent.container).toBeInTheDocument();
  });

  it('confirm & cancel button click', () => {
    const props: IConfirmCreateProposalModalProps = {
      proposal: mockProposal,
      onConfirm: jest.fn(),
      onClose: jest.fn(),
    };
    const { getByTestId } = renderComponent(props);

    fireEvent.click(getByTestId('confirm-proposal-modal-confirm'));
    expect(props.onConfirm).toBeCalled();

    fireEvent.click(getByTestId('confirm-proposal-modal-cancel'));
    expect(props.onClose).toBeCalled();
  });
});

