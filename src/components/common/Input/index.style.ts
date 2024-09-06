import styled from '@emotion/styled';
import { FormControl } from '@mui/material';

export const InputComponentStyle = styled(FormControl)(({ theme }: any) => {
  return {
    position: 'relative',
    '.MuiInputLabel-root': {
      display: 'flex',
      position: 'unset',
      color: `${theme.text.primary} !important`,
      fontSize: '0.875rem',
      lineHeight: '1.124rem',
      fontWeight: 400,
      transform: 'none',
      WebkitTransform: 'none',
      msTransform: 'none',
      marginBottom: '0.5rem',

      svg: {
        cursor: 'pointer',
        marginLeft: '0.25rem',
        path: {
          stroke: `${theme.text.paragraph} !important`,
        }
      }
    },

    '.MuiInputBase-root': {
      padding: '0.75rem 1rem',
      borderRadius: '0.25rem',
      color: theme.text.primary,
      border: `0.5px solid ${theme.border.primary}`,
      background: 'unset',
      animationDuration: '1s !important',
      fontSize: '1rem',
      lineHeight: '1.625rem',

      input: {
        padding: 0,
      },

      fieldset: {
        border: 'none',
      },

      '&:before': {
        content: 'none',
      },

      '&:after': {
        content: 'none',
      },

      '&:hover': {
        border: `1px solid ${theme.lightcurve[10]}`,
      },

      '&:focus-within': {
        border: `1px solid ${theme.lightcurve[0]}`,
      },
    },

    '.MuiFormHelperText-root': {
      color: theme.error.dark,
      margin: '0.5rem 0 0 0',

      p: {
        textAlign: 'right',
      }
    },

    '.input-length-counter': {
      position: 'absolute',
      bottom: '-1.5rem',
      width: '100%',
      display: 'flex',
      justifyContent: 'end',
      color: theme.text.paragraph,
      marginTop: '0.25rem',
      marginBottom: '0.25rem',
    },

    input: {
      '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
        WebkitAppearance: 'none',
        display: 'none'
      }
    }
  };
});
