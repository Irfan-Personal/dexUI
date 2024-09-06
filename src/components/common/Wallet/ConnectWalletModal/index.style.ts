import styled from '@emotion/styled';

export const ConnectWalletModalStyle = styled('div')(({ theme }: any) => {
  return {
    '.connect-wallet-modal-background': {
      position: 'fixed',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      zIndex: 30,

      [theme.breakpoints.down('sm')]: {
        background: 'rgba(0, 0, 0, 0.5)',
      },
    },

    '.connect-wallet-modal-container': {
      position: 'absolute',
      right: '1.5rem',
      top: '4.375rem',
      borderRadius: '0.75rem',
      background: theme.bg.secondary,
      boxShadow: theme.shadow.md,
      width: '20.25rem',
      zIndex: 30,

      [theme.breakpoints.down('sm')]: {
        left: '50%',
        right: 'unset',
        transform: 'translateX(-50%)',
      },

      '.select-wallet-header': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 2rem 1.5rem 2rem',
        borderBottom: `0.5px solid ${theme.border.primary}`,

        h4: {
          textAlign: 'center',
          marginBottom: '1.5rem',
        },

        p: {
          textAlign: 'center',

          a: {
            color: theme.lightcurve[0],
            textDecoration: 'none',
          }
        },
      },

      '.select-wallet-body': {
        '.network-item': {
          display: 'flex',
          marginTop: '1rem',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1rem 1rem 1rem 1.5rem',
          borderLeft: '0.25rem solid transparent',

          p: {
            display: 'none'
          },

          '&:hover': {
            cursor: 'pointer',
            borderLeft: `0.25rem solid ${theme.lightcurve[0]}`,

            p: {
              '&:hover': {
                cursor: 'pointer',
              },

              display: 'unset',
              color: theme.lightcurve[0],
            }
          },

          '.lisk-dex': {
            display: 'flex',
            alignItems: 'center',

            '.lisk-dex-icon': {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '2rem',
              height: '2rem',
              borderRadius: '100%',
              background: theme.lightcurve[0],
              marginRight: '0.75rem',

              svg: {
                path: {
                  fill: theme.text.button,
                }
              }
            }
          },

          h4: {
            fontWeight: 500,
          },
        },

        '.close-button': {
          padding: '0.75rem 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: 'none',
          width: '100%',
          marginBottom: '1.5rem',

          color: theme.text.paragraph,

          p: {
            '&:hover': {
              cursor: 'pointer',
            }
          }
        }
      },

      '&.request': {
        width: '22rem',

        '.select-wallet-header': {
          padding: '2rem 1.5rem 1.5rem 1.5rem',

          h4: {
            marginBottom: '0.5rem',
          },

          '.lisk-dex-icon': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '3rem',
            height: '3rem',
            borderRadius: '100%',
            background: theme.lightcurve[0],
            marginBottom: '0.75rem',

            svg: {
              width: '2rem',
              height: '2rem',

              path: {
                fill: theme.text.button,
              }
            }
          },

          '.MuiIconButton-root': {
            position: 'absolute',
            top: '0.5rem',
            right: '0.5rem',

            svg: {
              path: {
                stroke: theme.text.primary,
              }
            }
          }
        },

        '.select-wallet-body': {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '2rem 0',

          '.request-qr-code': {
            width: '10rem',
            height: '10rem',
            marginBottom: '1rem',

            'path:first-of-type': {
              fill: 'transparent',
            },

            'path:nth-of-type(2)': {
              fill: theme.primary[0],
            }
          },

          p: {
            textAlign: 'center',
          },

          '.request-copied': {
            marginTop: '1rem',
            color: theme.success.dark,
          },

          '.request-copy': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '1rem',

            '&:hover': {
              cursor: 'pointer',
            },

            svg: {
              marginRight: '0.25rem',
            },

            p: {
              color: theme.lightcurve[0],
            }
          }
        }
      },

      '.select-wallet-footer': {
        borderTop: `0.5px solid ${theme.border.primary}`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        padding: '1rem 0 1.5rem 0',

        '&.connected': {
          color: '#17CA69',
        },

        '&.connecting': {
          p: {
            color: theme.opacities[40],
          },

          svg: {
            path: {
              stroke: theme.opacities[40],
            }
          }
        },

        '&.error': {
          p: {
            color: theme.error.dark,
          },

          svg: {
            path: {
              stroke: theme.error.dark,
            }
          }
        },

        svg: {
          marginBottom: '0.5rem',
        }
      }
    }
  };
});
