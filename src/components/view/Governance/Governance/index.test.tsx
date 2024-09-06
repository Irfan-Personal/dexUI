import { ThemeProvider } from '@mui/material';
import { fireEvent, render } from '@testing-library/react';
import { GovernanceView, IGovernanceViewProposal } from './index';
import React from 'react';
import { lightTheme } from 'styles/theme';
import { mockProposals } from '__mock__';
import { ProposalStatus } from 'consts';

function renderComponent(props: IGovernanceViewProposal) {
  return render(
    <ThemeProvider theme={lightTheme}>
      <GovernanceView {...props} />
    </ThemeProvider>
  );
}

describe('GovernanceView', () => {
  const mockProps: IGovernanceViewProposal = {
    proposals: mockProposals,
  };
  it('checks if the component matches the snapshot', () => {
    const { container } = renderComponent(mockProps);
    expect(container).toMatchSnapshot();
  });

  it('create a proposal work', () => {
    const { getByTestId } = renderComponent(mockProps);
    const link = getByTestId('create-proposal');
    fireEvent.click(link.parentNode as Node);

    expect(link).toHaveAttribute('href', '/governance/create');
  });

  it('check if render all proposals', () => {
    const { getByText } = renderComponent(mockProps);

    mockProposals.map(proposal => {
      expect(getByText(proposal.title)).toBeInTheDocument();
    });
  });

  it('check if filtering proposals work', () => {
    const { getByText, getByTestId } = renderComponent(mockProps);

    fireEvent.select(getByTestId('filter-dropdown-test'), ProposalStatus.Active);

    mockProposals.map(proposal => {
      expect(getByText(proposal.title)).toBeInTheDocument();
    });
  });
});

