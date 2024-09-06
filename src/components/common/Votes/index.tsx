import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Typography } from '@mui/material';
import { IVote } from 'models';
import { VotesComponentStyle } from './index.style';
import { VoteItemComponent } from './VoteItem';

interface IVotesComponentProps {
  isUpSm: boolean,
  votes: IVote[],
  votesPage: number,
  votesTotal: number,
  votesTotalPages: number,
  onViewMore: () => void,
}

export const VotesComponent: React.FC<IVotesComponentProps> = (props) => {
  const { isUpSm, votes, votesPage, votesTotal, votesTotalPages, onViewMore } = props;

  return (
    <VotesComponentStyle>
      <Box className="votes-header">
        <Typography variant="h4">Votes • {votesTotal}</Typography>
      </Box>
      <Box className="votes-body">
        {
          votes.map((vote, idx) => (
            <VoteItemComponent isUpSm={isUpSm} key={idx} vote={vote} />
          ))
        }
        {
          votesPage <= votesTotalPages &&
          <Box
            className="votes-view-more"
            onClick={() => { onViewMore(); }}
          >
            <Typography variant="body2">View more</Typography>
            <FontAwesomeIcon icon={faChevronDown} />
          </Box>
        }
      </Box>
    </VotesComponentStyle>
  );
};