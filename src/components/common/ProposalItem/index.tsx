import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Grid, Typography } from '@mui/material';
import { ProposalTypeBadge } from 'components';
import { PATHS } from 'consts';
import { CalendarIcon } from 'imgs/icons';
import { IProposal } from 'models';
import Link from 'next/link';
import { ProposalItemStyle } from './index.style';

export interface IProposalItemComponentProps {
  proposal: IProposal,
}

export const ProposalItemComponent: React.FC<IProposalItemComponentProps> = (props) => {
  const { proposal } = props;

  return (
    <Link href={`${PATHS.PROPOSAL}/${proposal.id}`} passHref legacyBehavior>
      <ProposalItemStyle>
        <Box className="proposal-item-main">
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            className="proposal-item-header"
          >
            <Grid item className="proposal-item-no">
              <Typography variant="h4">#1</Typography>
              <ProposalTypeBadge type={proposal.proposalType} />
            </Grid>
            <Grid item className="proposal-item-status">
              <Box className="proposal-item-status-mark"></Box>
              <Typography variant="body2">Voting Period</Typography>
            </Grid>
          </Grid>
          <Typography variant="h4">{proposal.title}</Typography>
          <Box className="proposal-item-period">
            <CalendarIcon />
            <Typography variant="body2">Jan 05, 2022 - Feb 05, 2022, Ends in <span>15 days</span></Typography>
          </Box>
        </Box>
        <FontAwesomeIcon className="proposal-item-arrow" icon={faChevronRight} />
      </ProposalItemStyle>
    </Link>
  );
};