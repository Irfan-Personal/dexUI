import { useState } from 'react';
import { Box, FormLabel, Grid, Typography } from '@mui/material';
import cn from 'classnames';

import { SelectProposalTypeStyle } from './index.style';
import { ProposalType } from 'consts';
import { PoolIncentivizationIcon, UniversalIcon } from 'imgs/icons';
import { RadioComponent } from 'components';

interface IProps {
  label?: string,
  onChange?: (value: ProposalType) => void,
}

export const SelectProposalTypeComponent: React.FC<IProps> = (props) => {
  const { label, onChange } = props;
  const [proposalType, setProposalType] = useState<ProposalType>();

  const changeProposalType = (value: ProposalType) => {
    setProposalType(value);
    onChange && onChange(value);
  };

  return (
    <SelectProposalTypeStyle>
      {
        label ?? <FormLabel>{label}</FormLabel>
      }
      <Grid
        container
        spacing={3}
        className="proposals-grid"
        alignItems="stretch"
      >
        <Grid item md={6}>
          <Box
            data-testid="pool-incentivization-proposal-test"
            className={
              cn({
                'proposal-box': true,
                'selected': proposalType === ProposalType.PoolIncentivization
              })
            }
            onClick={() => { changeProposalType(ProposalType.PoolIncentivization); }}
          >
            <Box className="proposal-header">
              <PoolIncentivizationIcon />
              <RadioComponent
                checked={proposalType === ProposalType.PoolIncentivization}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => { changeProposalType(e.target.value as ProposalType); }}
                value={ProposalType.PoolIncentivization}
                name="radio-buttons"
              />
            </Box>
            <Typography variant="h5" className="proposal-title">Pool incentivization proposal</Typography>
            <Typography variant="body2" className="proposal-description">A pool incentivization proposal is a proposal type in the DEX Governance module that requests modifying the list of incentivized liquidity pools. Once accepted, this proposal has immediate on-chain consequences.</Typography>
          </Box>
        </Grid>
        <Grid item md={6}>
          <Box
            data-testid="universal-proposal-test"
            className={
              cn({
                'proposal-box': true,
                'selected': proposalType === ProposalType.Universal
              })
            }
            onClick={() => { changeProposalType(ProposalType.Universal); }}
          >
            <Box className="proposal-header">
              <UniversalIcon />
              <RadioComponent
                checked={proposalType === ProposalType.Universal}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => { changeProposalType(e.target.value as ProposalType); }}
                value={ProposalType.Universal}
                name="radio-buttons"
              />
            </Box>
            <Typography variant="h5" className="proposal-title">Universal proposal</Typography>
            <Typography variant="body2" className="proposal-description">A universal proposal is a proposal type in the DEX Governance module that can request arbitrary DEX-related actions, for example, changes in protocol, UI or even project strategy. Once accepted, this proposal is acted upon off-chain.</Typography>
          </Box>
        </Grid>
      </Grid>
    </SelectProposalTypeStyle>
  );
};
