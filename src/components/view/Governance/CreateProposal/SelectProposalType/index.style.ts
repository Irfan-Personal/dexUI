import styled from '@emotion/styled';
import { FormControl } from '@mui/material';

export const SelectProposalTypeStyle = styled(FormControl)(({ theme }: any) => {
  return {
    width: '100%',
    '.MuiFormLabel-root': {
      position: 'unset',
      color: `${theme.text.primary} !important`,
      fontSize: '0.875rem',
      lineHeight: '1.124rem',
      fontWeight: 400,
      transform: 'none',
      WebkitTransform: 'none',
      msTransform: 'none',
    },

    '.proposals-grid': {
      marginTop: '0rem',

      '.proposal-box': {
        height: '100%',
        padding: '1.5rem 1rem 1rem 1rem',
        borderRadius: '0.375rem',
        border: `0.5px solid ${theme.border.primary}`,
        animationDuration: '1s',
        cursor: 'pointer',

        ':hover': {
          border: `1px solid ${theme.lightcurve[10]}`,
        },

        '&.selected': {
          background: theme.primary[2.5],
          border: `1px solid ${theme.lightcurve[0]}`,
        },

        '.proposal-header': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '3rem',
          padding: '0 0.5rem 0 0.5rem',
        },

        '.proposal-title': {
          marginTop: '0.5rem',
          color: theme.text.primary,
        },

        '.proposal-description': {
          marginTop: '0.75rem',
          color: theme.text.paragraph,
        }
      }
    }
  };
});
