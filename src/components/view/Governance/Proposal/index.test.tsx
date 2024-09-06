import React from 'react';
import { ThemeProvider } from '@mui/material';
import { fireEvent, render } from '@testing-library/react';
import { ProposalView, IProposalViewProps } from './index';
import { lightTheme } from 'styles/theme';
import { mockProposals, mockVotes } from '__mock__';
import { ellipsisAddress } from 'utils';

function renderComponent(props: IProposalViewProps) {
  return render(
    <ThemeProvider theme={lightTheme}>
      <ProposalView {...props} />
    </ThemeProvider>
  );
}

describe('ProposalView', () => {
  const mockProps: IProposalViewProps = {
    votes: mockVotes.slice(0, 10),
    votesPage: 0,
    votesTotal: mockVotes.length,
    votesTotalPages: 1,
    proposal: mockProposals[0],
    onViewMore: jest.fn(),
    onVote: jest.fn(),
  };

  it('checks if the component matches the snapshot', () => {
    const { container } = renderComponent(mockProps);
    expect(container).toMatchSnapshot();
  });

  it('check if it renders correct proposal', () => {
    const { getByText } = renderComponent(mockProps);
    expect(getByText(mockProps.proposal.title)).toBeInTheDocument();
    expect(getByText(mockProps.proposal.summary)).toBeInTheDocument();
  });

  it('check if it renders correct votes', () => {
    const { findByText } = renderComponent(mockProps);
    for (const vote of mockProps.votes) {
      expect(findByText(ellipsisAddress(vote.user))).toBeTruthy();
    }
  });

  it('renders vote modal and check works', () => {
    const { getByTestId } = renderComponent(mockProps);
    const button = getByTestId('vote-button-test');
    fireEvent.click(button);

    expect(getByTestId('vote-modal-test')).toBeInTheDocument();

    const radio = getByTestId('vote-modal-radio');
    fireEvent.click(radio);

    const voteButton = getByTestId('vote-modal-button-test');
    fireEvent.click(voteButton);

    expect(mockProps.onVote).toBeCalled();
  });
});
