import { ComfirmCreateProposalModalStyle } from './index.style';
import { IProposal } from 'models';
import { Box, FormControl, FormLabel, Typography } from '@mui/material';
import { ButtonComponent, InputComponent, UrlInputComponent } from 'components/common';
import { ProposalType } from 'consts';
import { CancelIcon, PoolIncentivizationIcon, UniversalIcon } from 'imgs/icons';
import { timestampToString } from 'utils';

export interface IConfirmCreateProposalModalProps {
  proposal: IProposal,
  onConfirm?: () => void,
  onClose?: () => void,
}

export const ConfirmCreateProposalModal: React.FC<IConfirmCreateProposalModalProps> = (props) => {
  const { onConfirm, onClose, proposal } = props;

  return (
    <ComfirmCreateProposalModalStyle>
      <Box className="confirm-proposal-background" />
      <Box className="confirm-proposal-modal-container">
        <Box className="confirm-proposal-modal-header">
          <Typography variant="h3">Confirm creating proposal</Typography>
          <Typography variant="body2">Please double check all the information
            before submitting your proposal.</Typography>
          <CancelIcon
            data-testid="confirm-proposal-modal-cancel"
            onClick={() => { onClose && onClose(); }}
          />
        </Box>
        <Box className="confirm-proposal-modal-body">
          <InputComponent
            label="Author"
            value={proposal.author}
            readOnly
          />
          <FormControl className="confirm-proposal-type">
            <FormLabel>
              Proposal Type
            </FormLabel>
            <Box className="proposal-type-box">
              {
                {
                  [ProposalType.PoolIncentivization]:
                    <>
                      <PoolIncentivizationIcon />
                      <Typography variant="body1">Pool incentivization proposal</Typography>
                    </>,
                  [ProposalType.Universal]:
                    <>
                      <UniversalIcon />
                      <Typography variant="body1">Universal proposal</Typography>
                    </>,
                }[proposal.proposalType]
              }
            </Box>
          </FormControl>
          {
            proposal.multiplier &&
            <InputComponent
              label="Multiplier"
              value={proposal.multiplier}
              readOnly
            />
          }
          <InputComponent
            label="Proposal Title"
            value={proposal.title}
            readOnly
          />
          <InputComponent
            label="Description"
            value={proposal.description}
            multiline
            readOnly
          />
          {
            proposal.link &&
            <UrlInputComponent
              label="Discussions link"
              value={proposal.link}
              readOnly
            />
          }
          <InputComponent
            label="Voting schedule"
            value={`${timestampToString(new Date().getTime())} - ${timestampToString(new Date().getTime() + 10000000)}`}
            readOnly
          />
          <InputComponent
            label="Summary"
            value={proposal.summary}
            multiline
            readOnly
          />
          {/* <Box className="confirm-proposal-modal-transaction-fee">
            <Typography variant="body1" className="transaction-fee-title">Transaction Fee</Typography>
            <Typography variant="body1">5000 LSKDEX (~$4878.23)</Typography>
          </Box> */}
        </Box>
        <Box className="confirm-proposal-modal-footer">
          <ButtonComponent
            data-testid="confirm-proposal-modal-confirm"
            onClick={() => { onConfirm && onConfirm(); }}
          >
            <Typography variant="body1">Confirm</Typography>
          </ButtonComponent>
        </Box>
      </Box>
    </ComfirmCreateProposalModalStyle >
  );
};
