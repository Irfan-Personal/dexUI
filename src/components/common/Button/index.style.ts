import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const ButtonComponentStyle = styled(Button)(({ theme }: any) => {
  return {
    width: '100%',
    color: theme.error.dark,
    padding: '0.75rem',
    textTransform: 'capitalize',

    '&.MuiButton-outlined': {
      borderColor: theme.error.dark,
    },

    '&.MuiButton-contained': {
      background: theme.lightcurve[0],
      color: theme.text.button,
    },

    '&.Mui-disabled': {
      // color: theme.text.button,
      opacity: 0.7,
    }
  };
});
