import { faChevronRight, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Grid, IconButton, Typography, useMediaQuery } from '@mui/material';

import { ProposalViewStyle } from './index.style';
import { IProposal, IVote } from 'models';
import {
  ButtonComponent,
  CurrentResultComponent,
  ProposalStatusBadge,
  ProposalTypeBadge,
  StatusHistoryComponent,
  VotesComponent,
  YourVotingInfoComponent,
} from 'components';
import { darkTheme } from 'styles/theme';
import { VoteModal } from './VoteModal';
import { useState } from 'react';

export interface IProposalViewProps {
  votes: IVote[],
  votesPage: number,
  votesTotal: number,
  votesTotalPages: number,
  proposal: IProposal,
  onViewMore: () => void,
  onVote: (value: string) => void,
}

export const ProposalView: React.FC<IProposalViewProps> = (props) => {
  const {
    votes,
    votesPage,
    votesTotal,
    votesTotalPages,
    proposal,
    onViewMore,
    onVote,
  } = props;

  const isUpSm = useMediaQuery(darkTheme.breakpoints.up(darkTheme.breakpoints.values.sm));

  const [openVoteModal, setOpenVoteModal] = useState<boolean>(false);

  return (
    <ProposalViewStyle>
      <Box className="proposal-path">
        <Typography variant="h5">Home</Typography>
        <FontAwesomeIcon icon={faChevronRight} />
        <Typography variant="h5">Governance</Typography>
        <FontAwesomeIcon icon={faChevronRight} />
        <Typography variant="h5">Proposal</Typography>
      </Box>
      <Box className="proposal-container">
        {
          !!proposal &&
          <>
            <Box className="proposal-header">
              <Box>
                <Box className="proposal-badges">
                  <ProposalStatusBadge status={proposal.status} />
                  <ProposalTypeBadge type={proposal.proposalType} />
                </Box>
                <Typography className="proposal-header-title" variant="h2">{proposal.title}</Typography>
                <Typography className="proposal-header-short" variant="body2">by {proposal.author}   •   Proposed on: Dec 14th, 2022   •   Ends in 12 days</Typography>
              </Box>
              <Box className="proposal-header-actions">
                <ButtonComponent
                  data-testid="vote-button-test"
                  className="proposal-header-vote-button"
                  onClick={() => { setOpenVoteModal(true); }}
                >
                  <Typography variant="body1">Vote</Typography>
                </ButtonComponent>
                <IconButton className="proposal-header-header-menu-list-button">
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </IconButton>
              </Box>
            </Box>

            <Box className="proposal-body">
              <Grid container spacing={4}>
                <Grid item sm={12} md={12} lg={8} xl={8}>
                  <Typography className="proposal-body-summary" variant="h4">{proposal.summary}</Typography>
                  <Box className="proposal-body-description"><Typography variant="body1">{proposal.description}</Typography></Box>
                  {
                    isUpSm &&
                    <VotesComponent
                      isUpSm={isUpSm}
                      votes={votes}
                      votesPage={votesPage}
                      votesTotal={votesTotal}
                      votesTotalPages={votesTotalPages}
                      onViewMore={onViewMore}
                    />
                  }
                </Grid>
                <Grid item sm={12} md={12} lg={4} xl={4}>
                  <YourVotingInfoComponent />
                  <StatusHistoryComponent />
                  <CurrentResultComponent />
                </Grid>
              </Grid>
              {
                !isUpSm &&
                <VotesComponent
                  votes={votes}
                  isUpSm={isUpSm}
                  votesPage={votesPage}
                  votesTotal={votesTotal}
                  votesTotalPages={votesTotalPages}
                  onViewMore={onViewMore}
                />
              }
            </Box>
          </>
        }
      </Box>
      {
        openVoteModal &&
        <VoteModal
          onClose={() => { setOpenVoteModal(false); }}
          onVote={onVote}
        />
      }
    </ProposalViewStyle>
  );
};