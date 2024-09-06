import styled from '@emotion/styled';

export const SwapViewStyle = styled('div')(({ theme }: any) => {
  return {
    marginTop: '4rem',
    display: 'flex',
    justifyContent: 'center',

    [theme.breakpoints.down('sm')]: {
      marginTop: '1rem',
      marginBottom: '6rem',
      padding: '0 1rem',
    },

    '.swap-container': {
      position: 'relative',
      width: '31rem',
      borderRadius: '0.5rem',
      marginTop: '5.25rem',
      background: theme.bg.secondary,
      boxShadow: theme.shadow.md,
      padding: '1.5rem',

      [theme.breakpoints.down('sm')]: {
        width: '100%',
        paddingBottom: '4rem',
      },

      '.swap-header': {
        display: 'flex',
        justifyContent: 'space-between',
      },

      '.swap-description': {
        marginTop: '0.5rem',
      },

      '.swap-from-percent': {
        display: 'flex',
        alignItems: 'center',

        p: {
          cursor: 'pointer',
          color: theme.lightcurve[0],
          marginLeft: '0.75rem',
        }
      },

      '.swap-from-box': {
        padding: '1rem',
        borderRadius: '0.5rem',
        background: theme.primary[60],
        border: `1px solid ${theme.primary[5]}`,
        marginTop: '2.5rem',

        '.swap-from-top-box': {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        },

        '.swap-from-mid-box': {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '1rem',

          '.swap-from-select-token': {
            display: 'flex',
            alignItems: 'center',

            h6: {
              marginLeft: '0.5rem',
            },

            svg: {
              width: '1rem',
              height: '0.5rem',
              marginLeft: '0.25rem',
            }
          },

          '.MuiInputBase-root': {
            border: 'none',
            paddingRight: 0,

            input: {
              fontSize: '1.25rem',
              textAlign: 'right',
            }
          }
        },

        '.swap-from-input-error': {
          color: theme.error.dark,

          p: {
            textAlign: 'right',
          }
        },

        '.swap-from-bottom-box': {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '1.5rem',
          color: theme.lightcurve[0],
        },
      },

      '.swap-icon': {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '1.5rem',

        button: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',

          width: '2.5rem',
          height: '2.5rem',
          borderRadius: '100%',
          background: theme.primary[60],
        }
      },

      '.swap-to-box': {
        borderRadius: '0.5rem',
        background: theme.primary[60],
        border: `1px solid ${theme.primary[5]}`,
        marginTop: '1.5rem',
        marginBottom: '1.5rem',

        '.swap-to-main-box': {
          padding: '1rem',
        },

        '.swap-to-percent': {
          display: 'flex',
          alignItems: 'center',

          p: {
            color: theme.lightcurve[0],
            marginLeft: '0.75rem',
          }
        },

        '.swap-to-top-box': {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        },

        '.swap-to-mid-box': {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '1rem',

          '.swap-to-select-token': {
            display: 'flex',
            alignItems: 'center',
            marginLeft: '0.25rem',
            cursor: 'pointer',

            h6: {
              marginLeft: '0.5rem',
            },

            svg: {
              width: '1rem',
              height: '0.5rem',
              marginLeft: '0.25rem',
            }
          },

          '.MuiInputBase-root': {
            border: 'none',
            paddingRight: 0,

            input: {
              fontSize: '1.25rem',
              textAlign: 'right',
            }
          }
        },

        '.swap-to-bottom-box': {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '1.5rem',
          color: theme.lightcurve[0],
        },

        '.swap-to-price': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTop: `1px solid ${theme.primary[5]}`,
          padding: '0.5rem 1rem 0.5rem 1rem',

          '&:hover': {
            cursor: 'pointer',
          },

          div: {
            display: 'flex',
            alignItems: 'center',

            svg: {
              width: '0.75rem',
              height: '0.75rem',
              transform: 'rotate(90deg)',
              marginLeft: '0.5rem',
            }
          }
        },
      },

      '.swap-summary': {
        '.swap-summary-property': {
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '0.75rem',

          p: {
            display: 'flex',
            alignItems: 'center',
          },

          '.swap-summary-property-title': {
            svg: {
              marginLeft: '0.25rem',
            }
          },

          '&.slippage-tolerance>.swap-summary-property-value': {
            color: theme.lightcurve[0],
            cursor: 'pointer',
          },

          '&.price-impact .swap-summary-property-value': {
            color: theme.success.light,
          },

          '&.network-fee .swap-summary-property-value': {
            color: theme.text.primary,
          },

          '&.minimum-received .swap-summary-property-value': {
            color: theme.text.primary,
          },

          '&.minimum-received': {
            marginBottom: '2rem',
          }
        }
      }
    }
  };
});
