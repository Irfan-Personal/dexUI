import styled from '@emotion/styled';

export const ApproveTransactionModalStyle = styled('div')(({ theme }: any) => {
  return {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    zIndex: 201,

    '.approve-transaction-background': {
      position: 'fixed',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.5)',
      zIndex: 200,
    },

    '.approve-transaction-modal-container': {
      position: 'sticky',
      top: 0,
      float: 'right',
      marginBottom: '10rem',
      width: '34.45rem',
      borderRadius: '0.25rem',
      background: theme.bg.primary,
      boxShadow: theme.shadow.sm,
      zIndex: 201,

      [theme.breakpoints.down('md')]: {
        width: '100%',
        top: '5.5rem',
      },

      '.approve-transaction-modal-header': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1.5rem 1rem 1.5rem 1rem',
        color: theme.text.primary,
        borderBottom: `0.5px solid ${theme.border.primary}`,

        [theme.breakpoints.down('md')]: {
          padding: '1rem',
        },

        svg: {
          cursor: 'pointer',
          marginLeft: '0.75rem',
        },

        '.approve-transaction-status': {
          display: 'flex',
          alignItems: 'center',

          '.transaction-status': {
            display: 'flex',
            alignItems: 'center',
            padding: '0.5rem 1rem 0.5rem 1rem',
            border: `0.5px solid ${theme.border.primary}`,
            borderRadius: '0.75rem',
            background: theme.primary[5],

            '.status': {
              content: '" "',
              borderRadius: '100%',
              width: '0.625rem',
              height: '0.625rem',
              background: theme.success.light,
              marginRight: '0.5rem',
            }
          }
        }
      },

      '.approve-transaction-modal-body': {
        padding: '1.5rem 1.5rem 1rem 1.5rem',

        [theme.breakpoints.down('md')]: {
          padding: '1.5rem 1rem 1rem 1rem',
        },

        '.approve-transaction-wallet-info': {
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '2rem',

          [theme.breakpoints.down('md')]: {
            marginTop: '1.5rem',
          },

          '.MuiFormLabel-root': {
            color: theme.text.primary,
            marginBottom: '0.5rem',
            fontSize: '0.875rem',
            lineHeight: '1.124rem',
          },

          '.approve-transaction-account': {
            display: 'flex',
            flexDirection: 'column',

            '.approve-transaction-account-address': {
              display: 'flex',
              alignItems: 'center',
            }
          },

          '.approve-transaction-balance': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'end',

            '.approve-transaction-balance-amount': {
              display: 'flex',
              svg: {
                width: '1.25rem',
                height: '1.25rem',
                marginLeft: '0.25rem',
              },
            }
          },
        },

        '.approve-transaction-estimated-balance-change': {
          marginTop: '2rem',

          [theme.breakpoints.down('md')]: {
            display: 'none',
          },

          '.approve-transaction-estimated-balance': {
            marginTop: '0.75rem',
            display: 'flex',

            '.estimated-balance': {
              marginLeft: '1rem',
              color: theme.error.dark,
            }
          },
        },

        '.approve-transaction-request': {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          alignContent: 'center',
          width: '100%',
          padding: '6rem 0 6rem 0',

          svg: {
            width: '4rem',
            height: '4rem',
          },

          h4: {
            marginTop: '0.75rem',
          },

          p: {
            marginTop: '0.5rem',
          }
        },

        '.approve-transaction-proposal-creation-fee': {
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '1.5rem',
          marginBottom: '0.75rem',
        },

        '.approve-transaction-proposal-transaction-total': {
          display: 'flex',
          justifyContent: 'space-between',
          borderTop: `0.5px solid ${theme.border.primary}`,
          padding: '1rem 0 0 0',
        }
      },

      '.approve-transaction-modal-footer': {
        display: 'flex',
        padding: '1.5rem 2.5rem 2.5rem 1.5rem',

        '.approve-transaction-modal-cancel': {
          width: '10rem',
          marginRight: '1rem',
          background: 'none',

          '&:hover': {
            P: {
              textDecoration: 'underline',
              color: theme.error.dark,
            }
          },

          P: {
            color: theme.error.dark,
          }
        }
      },
    }
  };
});
