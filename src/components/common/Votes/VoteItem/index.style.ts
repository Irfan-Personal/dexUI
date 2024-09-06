import styled from '@emotion/styled';
import { Grid } from '@mui/material';

export const VoteItemComponentStyle = styled(Grid)(({ theme }: any) => {
  return {
    padding: '1.5rem 0',
    borderBottom: `0.5px solid ${theme.border.primary}`,

    '.MuiGrid-item': {
      display: 'flex',
      alignItems: 'center',
    },

    '.vote-user': {
      p: {
        marginLeft: '0.5rem',
        fontWeight: 500,
        color: theme.lightcurve[0],
      }
    },

    '.vote-amount': {
      justifyContent: 'end',
    }
  };
});
