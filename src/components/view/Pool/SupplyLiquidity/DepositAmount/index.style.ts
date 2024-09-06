import styled from '@emotion/styled';

export const DepositAmountStyle = styled('div')(({ theme }: any) => {
  return {
    padding: '1rem',
    background: theme.primary[60],
    border: `1px solid ${theme.primary[5]}`,
    borderRadius: '0.5rem',

    '.token-amount': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',

      '.selected-token': {
        display: 'flex',
        alignItems: 'center',

        h6: {
          marginLeft: '0.5rem',
        }
      },

      '.select-tokens': {
        borderRadius: '0.5rem',
        background: 'linear-gradient(180deg, #513AE2 0%, rgba(64, 45, 183, 0.9) 100%);',
        padding: '0.5rem 0.625rem',
        color: theme.text.button,
      },

      '.MuiInputBase-root': {
        border: 'none !important',
        padding: 0,

        input: {
          fontSize: '1.25rem',
          textAlign: 'right',
        },
      }
    },

    '.input-error': {
      color: theme.error.dark,

      p: {
        textAlign: 'right',
      }
    },

    '.token-balance-details': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      color: theme.lightcurve[0],
      marginTop: '1rem',

      '.token-balance-percent': {
        display: 'flex',
        cursor: 'pointer',
        p: {
          marginLeft: '0.75rem',
        }
      }
    }
  };
});