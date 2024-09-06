import styled from '@emotion/styled';
import { FormControl } from '@mui/material';

export const DropdownComponentStyle = styled(FormControl)(({ theme }: any) => {
  return {
    '.MuiFormLabel-root': {
      position: 'unset',
      display: 'flex',
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

    '.MuiOutlinedInput-root': {
      borderRadius: '0.25rem',
      color: theme.text.primary,
      border: `0.5px solid ${theme.border.primary}`,
      background: 'unset',
      animationDuration: '1s !important',
      fontSize: '1rem',
      lineHeight: '2rem',

      '.MuiSelect-select': {
        padding: '0.75rem 4rem 0.75rem 1rem !important',
      },

      fieldset: {
        border: 'none',
      },

      '&:hover': {
        border: `1px solid ${theme.lightcurve[10]}`,
      },

      '&:focus-within': {
        border: `1px solid ${theme.lightcurve[0]}`,
      },
    },

    '.dropdown-arrow': {
      display: 'inline-block',
      width: '0.5rem',
      marginRight: '1rem',
      userSelect: 'none',
      flexShrink: 0,
      transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      position: 'absolute',
      right: '0.5rem',
      top: 'calc(50% - 0.5em)',
      pointerEvents: 'none',
    }
  };
});
