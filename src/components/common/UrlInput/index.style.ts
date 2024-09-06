import styled from '@emotion/styled';
import { FormControl } from '@mui/material';

export const UrlInputComponentStyle = styled(FormControl)(({ theme }: any) => {
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

      svg: {
        cursor: 'pointer',
        marginLeft: '0.25rem',
        path: {
          stroke: `${theme.text.paragraph} !important`,
        }
      },

      span: {
        color: theme.text.paragraph,
        marginLeft: '0.25rem'
      }
    },

    '.MuiInputBase-root': {
      padding: '0.75rem 1rem 0.75rem 2.5rem',
      borderRadius: '0.25rem',
      color: theme.text.primary,
      border: `0.5px solid ${theme.border.primary}`,
      background: 'unset',
      animationDuration: '1s !important',
      marginTop: '0.5rem',
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

    '.link-icon': {
      position: 'absolute',
      left: '1rem',
      top: '2.625rem',

      '&:hover': {
        cursor: 'pointer',
      },

      path: {
        stroke: theme.text.placeholder,
      },

      '&.active': {
        path: {
          stroke: theme.lightcurve[0],
        }
      }
    }
  };
});
