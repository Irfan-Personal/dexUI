import styled from '@emotion/styled';

export const IncreaseLiquidityModalStyle = styled('div')(({ theme }: any) => {
  return {
    '.increase-liquidity-modal-background': {
      position: 'fixed',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.5)',
      zIndex: 30,
    },

    '.increase-liquidity-modal-container': {
      position: 'fixed',
      left: '50%',
      top: '50%',
      marginBottom: '10rem',
      transform: 'translate(-50%, -50%)',
      width: '30.5rem',
      borderRadius: '0.5rem',
      background: theme.bg.modal,
      boxShadow: theme.shadow.md,
      zIndex: 30,
      padding: '1.5rem',

      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },

      '.increase-liquidity-modal-title': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

        '.MuiIconButton-root': {
          svg: {
            path: {
              stroke: theme.text.primary,
            }
          }
        }
      },

      '.increase-liquidity-modal-summmary': {
        display: 'flex',
        marginTop: '1.5rem',

        '.summary-token-name': {
          marginLeft: '0.5rem',
        },

        '.summary-rate': {
          background: theme.primary[20],
          padding: '0.25rem 0.5rem',
          borderRadius: '0.5rem',
          marginLeft: '1rem',

          p: {
            fontSize: '0.75rem',
            lineHeight: '1rem',
          }
        }
      },

      '.increase-liquidity-deposit-amounts': {
        marginTop: '2.5rem',
        marginBottom: '1.5rem',

        '.MuiFormControl-root': {
          width: '100%',
          marginTop: '1rem',

          '.MuiInputBase-root': {
            height: '3.5rem',
            border: 'none',
            borderRadius: '0.5rem',
            background: theme.primary[60],
          },

          h6: {
            marginLeft: '0.5rem',
          },

          input: {
            textAlign: 'right',
          }
        }
      }
    }
  };
});
