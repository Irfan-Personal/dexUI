import styled from '@emotion/styled';

export const SwapConfirmStyle = styled('div')(({ theme }: any) => {
  return {
    '.swap-confirm-modal-background': {
      position: 'fixed',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.5)',
      zIndex: 30,
    },

    '.swap-confirm-modal-container': {
      position: 'fixed',
      left: '50%',
      top: '50%',
      marginBottom: '10rem',
      transform: 'translate(-50%, -50%)',
      width: '22.75rem',
      borderRadius: '0.5rem',
      background: `${theme.bg.secondary} !important`,
      boxShadow: theme.shadow.md,
      zIndex: 30,
      padding: '1.5rem',

      [theme.breakpoints.down('sm')]: {
        width: 'calc(100% - 4rem)',
        left: '2rem',
        transform: 'translateY(-50%)',
      },

      '.swap-confirm-modal-header': {
        display: 'flex',
        justifyContent: 'space-between',
        color: theme.text.primary,
        marginBottom: '2rem',

        svg: {
          cursor: 'pointer',
        },
      },

      '.swap-confirm-modal-body': {
        '.swap-confirm-token-amount': {
          display: 'flex',
          alignItems: 'center',
          marginTop: '0.5rem',

          svg: {
            width: '1.5rem',
            height: '1.5rem',
          },

          '.swap-confirm-amount': {
            marginLeft: '0.5rem',
          },

          '.swap-confirm-estimate-amount': {
            marginLeft: '0.75rem',
            color: theme.text.paragraph,
            fontSize: '0.75rem',
          },
        },

        '.transaction-detail': {
          marginTop: '2rem',

          '.transaction-detail-title': {
            marginBottom: '1rem',
          },

          '.transaction-detail-property': {
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '0.75rem',

            p: {
              display: 'flex',
              alignItems: 'center',
            },

            '.transaction-detail-property-title': {
              svg: {
                marginLeft: '0.25rem',
              }
            },

            '&.price-impact .transaction-detail-property-value': {
              color: theme.success.light,
            },

            '&.network-fee .transaction-detail-property-value': {
              color: theme.text.primary,
            },

            '&.minimum-received .transaction-detail-property-value': {
              color: theme.text.primary,
            },

            '&.minimum-received': {
              marginBottom: '2.5rem',
            }
          }
        }
      },

      '.swap-confirm-modal-footer': {
        display: 'flex',

        '.swap-confirm-modal-cancel': {
          width: '10rem',
          marginRight: '1rem',
          background: 'none',

          '&:hover': {
            p: {
              textDecoration: 'underline',
            }
          },

          P: {
            color: theme.opacities[20],
          }
        }
      },

      '.swap-confirm-arrow': {
        marginTop: '1.5rem',
        marginBottom: '1.5rem',
        marginLeft: '0.375rem',
      },
    }
  };
});
