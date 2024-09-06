import { Typography } from '@mui/material';
import { ProposalType } from 'consts';
import { PoolIncentivizationIcon, UniversalIcon } from 'imgs/icons';
import { ProposalTypeBadgeStyle } from './index.style';

interface IProposalTypeBadgeProps {
  type: ProposalType,
}

export const ProposalTypeBadge: React.FC<IProposalTypeBadgeProps> = (props) => {
  const { type } = props;

  return (
    <ProposalTypeBadgeStyle className="proposal-type-badge">
      {
        {
          [ProposalType.PoolIncentivization]: <PoolIncentivizationIcon />,
          [ProposalType.Universal]: <UniversalIcon />
        }[type]
      }
      <Typography variant="h6">{type}</Typography>
    </ProposalTypeBadgeStyle>
  );
};