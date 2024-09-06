import styled from '@emotion/styled';
import { Switch } from '@mui/material';

export const SwitchComponentStyle = styled(Switch)(({ theme }: any) => {
  return {
    width: '2.75rem',
    height: '1.5rem',
    padding: 0,

    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
    },

    '.MuiSwitch-thumb': {
      background: theme.switch.thumb,
      width: '1.25rem',
      height: '1.25rem',
    },
    '.MuiSwitch-track': {
      background: `${theme.switch.track} !important`,
      borderRadius: '0.75rem',
    }
  };
});
