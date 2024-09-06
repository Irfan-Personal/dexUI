import { Box, FormControl, FormControlLabel, RadioGroup, Typography } from '@mui/material';
import {
  ButtonComponent,
  RadioComponent
} from 'components';
import { LiskIcon } from 'imgs/icons';
import { ChangeEvent, useState } from 'react';
import { VoteModalStyle } from './index.style';

export interface IVoteModalProps {
  onClose: () => void,
  onVote: (value: string) => void,
}

export const VoteModal: React.FC<IVoteModalProps> = (props) => {
  const { onClose, onVote } = props;
  const [value, setValue] = useState<string>('yes');

  const onChange = (event: ChangeEvent<HTMLInputElement>, value: string) => {
    setValue(value);
  };

  return (
    <VoteModalStyle data-testid="vote-modal-test">
      <Box className="vote-modal-background" />
      <Box className="vote-modal-container">
        <Box className="vote-modal-header">
          <Typography variant="h4">Cast your vote</Typography>
        </Box>
        <Box className="vote-modal-body">
          <Box className="vote-modal-voting-power">
            <Typography variant="body2">Your voting power:</Typography>
            <Box className="vote-modal-voting-power-dex">
              <LiskIcon />
              <Typography variant="body2">42 LSKDEX</Typography>
            </Box>
          </Box>
          <FormControl>
            <RadioGroup
              data-testid="vote-modal-radio"
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              value={value}
              onChange={onChange}
            >
              <FormControlLabel value="yes" control={<RadioComponent />} label="Yes" />
              <FormControlLabel value="no" control={<RadioComponent />} label="No" />
              <FormControlLabel value="pass" control={<RadioComponent />} label="Pass" />
            </RadioGroup>
          </FormControl>
        </Box>
        <Box className="vote-modal-footer">
          <ButtonComponent
            className="vote-modal-cancel"
            variant="text"
            onClick={() => { onClose(); }}
          >
            <Typography variant="body1">Cancel</Typography>
          </ButtonComponent>
          <ButtonComponent
            data-testid={value && 'vote-modal-button-test'}
            className="vote-modal-confirm"
            onClick={() => { onVote(value); }}
            disabled={!value}
          >
            <Typography variant="body1">Vote</Typography>
          </ButtonComponent>
        </Box>
      </Box>
    </VoteModalStyle>
  );
};