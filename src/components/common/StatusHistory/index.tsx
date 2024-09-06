
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  timelineItemClasses,
  TimelineSeparator
} from '@mui/lab';
import { Box, Typography } from '@mui/material';
import { ClockIcon } from 'imgs/icons';
import { StatusHistoryComponentStyle } from './index.style';

export const StatusHistoryComponent: React.FC = () => {
  return (
    <StatusHistoryComponentStyle className="status-history-component">
      <Box className="status-history-header">
        <Typography variant="h4">Status history</Typography>
        <ClockIcon />
      </Box>
      <Box className="status-history-body">
        <Timeline
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }}
        >
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot>
                <FontAwesomeIcon icon={faCheckCircle} />
              </TimelineDot>
              <TimelineConnector className="success" />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="body1">Created</Typography>
              <Typography variant="body2">December 14, 2022 - 3:45:24 PM</Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot className="pending" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="body1">Start date</Typography>
              <Typography variant="body2">December 15, 2022 - 12:00:00 AM</Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="body1">Quorum</Typography>
              <Typography variant="body2">January 15, 2022 - 12:00:00 AM</Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="body1">Executed/Rejected</Typography>
              <Typography variant="body2">January 16, 2022 - 12:00:00 AM</Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Box>
    </StatusHistoryComponentStyle>
  );
};