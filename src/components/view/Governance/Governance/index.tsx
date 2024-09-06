import {
  Box,
  MenuItem,
  SelectChangeEvent,
  Typography
} from '@mui/material';
import { BankIcon, VoteIcon } from 'imgs/icons';
import { PATHS, ProposalStatus } from 'consts';
import Link from 'next/link';
import { GovernanceViewStyle } from './index.style';
import { DropdownComponent } from 'components/common/Dropdown';
import { EmptyComponent } from 'components/common/Empty';
import { ProposalItemComponent } from 'components';
import { useMemo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@mui/styles';
import { IProposal } from 'models';

export interface IGovernanceViewProposal {
  proposals: IProposal[],
}

export const GovernanceView: React.FC<IGovernanceViewProposal> = (props) => {
  const theme: any = useTheme();
  const { proposals } = props;
  const [proposalStatus, setProposalStatus] = useState<ProposalStatus>(ProposalStatus.All_Proposals);

  const onChangeProposalStatus = (event: SelectChangeEvent<any>) => {
    setProposalStatus(event.target.value as ProposalStatus);
  };

  const filteredProposals = useMemo(() => {
    return proposals.filter(el => el.status === proposalStatus || proposalStatus === ProposalStatus.All_Proposals);
  }, [proposals, proposalStatus]);

  return (
    <GovernanceViewStyle className="governance-page">
      <Box className="governance-banner">
        <Box>
          <Box className="governance-title">
            <Typography variant="h1">
              Governance
            </Typography>
            <BankIcon className="governance-bank-icon" />
          </Box>
          <Typography className="governanace-description" variant="body1">Vote on proposals and make decisions for the future of Lisk DEX ecosystem.</Typography>
        </Box>
        <Box className="governance-vote-image">
          <VoteIcon />
        </Box>
      </Box>

      <Box className="governance-proposals">
        <Typography className="governance-proposals-title" variant="h3">
          Proposals
        </Typography>
        <Typography className="governance-proposals-description" variant="body1">
          Participate in voting regarding the future of Lisk DEX platform. Use the voting power of the native Lisk DEX Tokens across our ecosystem.
        </Typography>
        <Box className="governance-proposals-actions">
          <DropdownComponent
            data-testid="filter-dropdown-test"
            className="governance-proposals-select"
            value={proposalStatus}
            onChange={onChangeProposalStatus}
            renderValue={(value: any) => (
              <Typography variant="h6">{value}</Typography>
            )}
          >
            {
              Object.entries(ProposalStatus).map(([key, value]) => (
                <MenuItem
                  key={key}
                  value={value}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <Typography variant="h6">{value}</Typography>
                  {
                    proposalStatus === value &&
                    <FontAwesomeIcon icon={faCheck} fill={theme.text.paragraph} />
                  }
                </MenuItem>
              ))
            }
          </DropdownComponent>
          <Link href={PATHS.CREATE_PROPOSAL} passHref legacyBehavior>
            <Typography variant="h5" className="governance-proposals-create" data-testid="create-proposal">+ Create a proposal</Typography>
          </Link>
        </Box>
        <Box className="governance-proposals-items">
          {
            filteredProposals.length ?
              <>
                {
                  filteredProposals.map(proposal => (
                    <ProposalItemComponent key={proposal.id} proposal={proposal} />
                  ))
                }
              </> :
              <EmptyComponent
                className="governance-empty-img"
                subject="No proposals found."
                description="When proposals are created, they will appear here."
              />
          }
        </Box>
      </Box>
    </GovernanceViewStyle>
  );
};