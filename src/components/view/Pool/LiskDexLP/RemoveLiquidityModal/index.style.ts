import styled from '@emotion/styled';

export const RemoveLiquidityModalStyle = styled('div')(({ theme }: any) => {
  return {
    '.remove-liquidity-modal-background': {
      position: 'fixed',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.5)',
      zIndex: 30,
    },

    '.remove-liquidity-modal-container': {
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

      '.remove-liquidity-modal-title': {
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

      '.remove-liquidity-modal-summmary': {
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

      '.remove-liquidity-amount': {
        marginTop: '2.5rem',
        marginBottom: '1.5rem',

        h1: {
          textAlign: 'center',
          marginTop: '1.25rem',
          marginBottom: '1.5rem',
        },

        '.amount-selections': {
          display: 'flex',
          justifyContent: 'space-around',
          marginTop: '1rem',

          '.MuiButtonBase-root': {
            padding: '0.5rem 1rem',
            borderRadius: '0.5rem',
            width: '3.75rem',
            height: '2.25rem',

            '&.MuiButton-outlined': {
              color: theme.primary[0],
              border: `1px solid ${theme.border.primary}`,
            },

            // p: {
            //   color: theme.primary[0],
            // }
          }
        },

        '.MuiSlider-root': {
          '.MuiSlider-rail': {
            background: theme.slider.secondary,
            height: '1rem',
            borderRadius: '1rem',
            opacity: 1,
          },

          '.MuiSlider-track': {
            height: '1rem',
            background: theme.lightcurve[0],
            borderRadius: '1rem',
            opacity: 1,
            border: 'none',
          },

          '.MuiSlider-thumb': {
            width: '1.5rem',
            height: '1.5rem',
            border: `2px solid ${theme.lightcurve[0]}`,
            background: theme.text.button,
          }
        },
      },

      '.remove-liquidity-will-receive': {
        marginTop: '1rem',
        marginBottom: '1.5rem',
        padding: '1rem',
        background: theme.primary[60],
        border: `1px solid ${theme.border.primary}`,
        borderRadius: '0.5rem',

        '.token-amount': {
          display: 'flex',
          justifyContent: 'space-between',

          '&.token2': {
            marginTop: '0.75rem',
          },

          '.title': {
            display: 'flex',

            p: {
              marginLeft: '0.5rem',
            }
          }
        }
      },
    }
  };
});
