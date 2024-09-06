import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Typography } from '@mui/material';
import { YourVotingInfoComponentStyle } from './index.style';

export const YourVotingInfoComponent: React.FC = () => {
  return (
    <YourVotingInfoComponentStyle className="your-voting-info-component">
      <Box className="your-voting-info-header">
        <Typography variant="h4">Your voting info</Typography>
        <FontAwesomeIcon icon={faBolt} />
      </Box>
      <Box className="your-voting-info-body">
        <Typography variant="body2">
          You did not participate in this proposal
        </Typography>
      </Box>
    </YourVotingInfoComponentStyle>
  );
};