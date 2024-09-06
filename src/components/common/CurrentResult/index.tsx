import { Box, CircularProgress, LinearProgress, Typography } from '@mui/material';
import { ProposalStatus } from 'consts';
import { PieChartIcon } from 'imgs/icons';
import { ProposalStatusBadge } from '../ProposalStatusBadge';
import { CurrentResultComponentStyle } from './index.style';

export const CurrentResultComponent: React.FC = () => {
  return (
    <CurrentResultComponentStyle className="current-result-component">
      <Box className="current-result-header">
        <Typography variant="h4">Current result</Typography>
        <PieChartIcon />
      </Box>
      <Box className="current-result-body">
        <Box className="current-result-circular-progress">
          <CircularProgress className="circular-progress-vote-no" variant="determinate" value={100} thickness={4} />
          <CircularProgress className="circular-progress-vote-yes" variant="determinate" value={78} thickness={4} />
          <Typography variant="h3">78%</Typography>
        </Box>

        <Typography variant="body2">Yes</Typography>
        <Box className="current-result-linear-progress vote-yes">
          <LinearProgress variant="determinate" value={78.53} />
          <Box className="current-result-linear-progress-info">
            <Typography variant="caption">75K LSKDEX (276 votes)</Typography>
            <Typography className="vote-yes-percent" variant="caption">78.53%</Typography>
          </Box>
        </Box>

        <Typography variant="body2">No</Typography>
        <Box className="current-result-linear-progress vote-no">
          <LinearProgress variant="determinate" value={22.46} />
          <Box className="current-result-linear-progress-info">
            <Typography variant="caption">75K LSKDEX (276 votes)</Typography>
            <Typography className="vote-no-percent" variant="caption">22.46%</Typography>
          </Box>
        </Box>

        <Typography variant="body2">Pass</Typography>
        <Box className="current-result-linear-progress vote-pass">
          <LinearProgress variant="determinate" value={0} />
          <Box className="current-result-linear-progress-info">
            <Typography variant="caption">75K LSKDEX (276 votes)</Typography>
            <Typography className="vote-pass-percent" variant="caption">0%</Typography>
          </Box>
        </Box>

        <Box className="current-result-linear-state">
          <Typography variant="body2">State</Typography>
          <Box className="current-result-linear-state-info">
            <ProposalStatusBadge status={ProposalStatus.Active} />
            <Typography variant="body2" sx={{ fontSize: '0.75rem' }}>Started on Dec 15, 2022</Typography>
          </Box>
        </Box>

        <Box className="current-result-linear-minimum-approval">
          <Typography variant="body2">Minumum approval</Typography>
          <Typography variant="body2" sx={{ fontSize: '0.75rem' }}>76%</Typography>
        </Box>


        <Box className="current-result-linear-total-voting-power">
          <Typography variant="body2">Total voting power</Typography>
          <Typography variant="body2" sx={{ fontSize: '0.75rem' }}>324</Typography>
        </Box>
      </Box>
    </CurrentResultComponentStyle>
  );
};