import styled from '@emotion/styled';

export const WalletComponentStyle = styled('div')(({ theme }: any) => {
  return {
    display: 'flex',

    '.header-menu-chain': {
      '&>.MuiOutlinedInput-root': {
        width: '10rem',
        background: theme.primary[2.5],
        border: `0.5px solid ${theme.primary[5]}`,
        borderRadius: '0.75rem',
        marginLeft: '2rem',

        '&>.MuiSelect-select': {
          display: 'flex',
          padding: '0.75rem 0.75rem 0.75rem 0.5rem !important',
        },

        p: {
          color: theme.text.primary,
        },

        svg: {
          color: theme.text.primary,
          marginRight: '0.25rem',

          path: {
            fill: theme.lightcurve[0],
          },
        },

        fieldset: {
          border: 'none',
        },

        [theme.breakpoints.down('lg')]: {
          display: 'none'
        },
      }
    },

    '.header-menu-wallet': {
      display: 'flex',
      alignItems: 'center',
      background: theme.primary[2.5],
      border: `0.5px solid ${theme.primary[5]}`,
      borderRadius: '0.75rem',
      height: '3rem',
      padding: '0.125rem 0.5rem 0.125rem 0.5rem',
      marginLeft: '0.75rem',
      color: theme.text.primary,

      '&:hover': {
        cursor: 'pointer',
      },

      '&.open': {
        background: theme.lightcurve[0],
        color: theme.text.button,
      },

      h5: {
        marginLeft: '0.5rem',
      },

      svg: {
        marginLeft: '0.25rem',
        marginRight: '0.25rem',
      }
    },

    '.wallet-connect-button': {
      borderRadius: '0.75rem',
      padding: '0.75rem 1.25rem',
      boxShadow: 'none',

      '&.open': {
        background: theme.primary[10],
        color: theme.lightcurve[0],
      }
    }
  };
});
