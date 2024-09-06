import { Typography } from '@mui/material';
import { ProposalStatus } from 'consts';
import { ProposalStatusBadgeStyle } from './index.style';

interface IProposalStatusBadgeProps {
  status: ProposalStatus,
}

export const ProposalStatusBadge: React.FC<IProposalStatusBadgeProps> = (props) => {
  const { status } = props;

  return (
    <ProposalStatusBadgeStyle className="proposal-status-badge">
      <Typography variant="h6">{status}</Typography>
    </ProposalStatusBadgeStyle>
  );
};