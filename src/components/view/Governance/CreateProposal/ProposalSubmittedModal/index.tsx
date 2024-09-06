import { ProposalSubmittedStyle } from './index.style';
import { Box, Link, Typography } from '@mui/material';
import { SuccessIcon } from 'imgs/icons';
import { ButtonComponent } from 'components/common';

interface IProps {
  onClose?: () => void
}

export const ProposalSubmittedModal: React.FC<IProps> = (props) => {
  const { onClose } = props;

  return (
    <ProposalSubmittedStyle>
      <Box className="proposal-submitted-background" />
      <Box className="proposal-submitted-modal-container">
        <Typography variant="h3">Proposal submitted</Typography>
        <SuccessIcon />
        <Typography className="proposal-submitted-content" variant="body1" >Successfully created your Governance proposal.</Typography>
        <Link>
          <Typography className="proposal-submitted-content" variant="body1" >View on Liskscan</Typography>
        </Link>
        <ButtonComponent
          data-testid="proposal-submitted-modal-close"
          onClick={() => { onClose && onClose(); }}
        >
          <Typography variant="body1">Close</Typography>
        </ButtonComponent>
      </Box>
    </ProposalSubmittedStyle >
  );
};
