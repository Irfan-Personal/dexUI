import styled from '@emotion/styled';
import { FormControl } from '@mui/material';

export const SearchInputComponentStyle = styled(FormControl)(({ theme }: any) => {
  return {
    position: 'relative',
    width: '100%',

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
      }
    },

    '.search-icon': {
      position: 'absolute',
      top: '1rem',
      left: '1rem',
      zIndex: 1,
    },

    '.MuiInputBase-root': {
      padding: '1rem 1rem 1rem 2.75rem',
      borderRadius: '0.25rem',
      background: theme.primary[2.5],
      color: theme.text.primary,
      animationDuration: '1s !important',
      fontSize: '1rem',
      lineHeight: '1.25rem',

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
    }
  };
});
