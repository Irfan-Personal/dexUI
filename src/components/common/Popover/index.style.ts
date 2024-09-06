import styled from '@emotion/styled';
import { Popover } from '@mui/material';

export const PopoverComponentStyle = styled(Popover)(({ theme }: any) => {
  return {
    '.MuiPaper-root': {
      background: 'none',
      boxShadow: 'none',
    },

    '.popover-container': {
      position: 'relative',
      width: '18.5rem',
      marginLeft: '1rem',
      borderRadius: '0.25rem',
      padding: '0.5rem',
      color: theme.text.button,
      background: theme.bg.helper,

      '&:before': {
        position: 'absolute',
        left: '-0.625rem',
        top: '50%',
        transform: 'translateY(-50%)',
        content: '" "',
        width: 0,
        height: 0,
        borderTop: '0.375rem solid transparent',
        borderRight: `0.625rem solid ${theme.bg.helper}`,
        borderBottom: '0.375rem solid transparent',
      }
    }
  };
});
