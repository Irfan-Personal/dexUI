import styled from '@emotion/styled';

export const RemoveLiquidityStyle = styled('div')(({ theme }: any) => {
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
      width: '33.25rem',
      borderRadius: '0.5rem',
      background: `${theme.bg.secondary} !important`,
      boxShadow: theme.shadow.md,
      zIndex: 30,

      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },

      '.remove-liquidity-modal-header': {
        padding: '2rem 1.5rem',
        position: 'relative',

        '.remove-liquidity-modal-title': {
          display: 'flex',
          justifyContent: 'center',
          color: theme.text.primary,
          marginBottom: '4rem',

          '.MuiIconButton-root': {
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',

            svg: {
              path: {
                stroke: theme.text.primary,
              }
            }
          }
        },

        '.remove-liquidity-modal-description': {
          marginBottom: '1.25rem',
          div: {
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '2rem',
          },
          p: {
            textAlign: 'center',
            marginBottom: '0.75rem',
          },
        },

        '.light-icon': {
          position: 'absolute',

          '&.data-index-1': {
            top: '10rem',
            left: '10rem',
          },

          '&.data-index-2': {
            top: '2rem',
            left: '26rem',
          },

          '&.data-index-3': {
            top: '4rem',
            left: '2rem',
          },

          '&.data-index-4': {
            top: '8rem',
            left: '22rem',
          },

          '&.data-index-5': {
            top: '16rem',
            left: '6rem',
          },


          '&.data-index-6': {
            top: '14rem',
            left: '28rem',
          },
        }
      },

      '.remove-liquidity-modal-body': {
        padding: '1.5rem 1.5rem 2rem 1.5rem',
        borderRadius: '0 0 0.5rem 0.5rem',
        background: theme.primary[2.5],

        '.deposit-property': {
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '0.75rem',

          '.deposit-property-amount': {
            display: 'flex',
            alignItems: 'center',

            p: {
              marginLeft: '0.5rem',
            }
          }
        },

        '.deposit-description': {
          margin: '3.25rem 2rem 2rem 2rem',
          textAlign: 'center',
        }
      }
    }
  };
});
