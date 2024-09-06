import styled from '@emotion/styled';

export const WalletModalStyle = styled('div')(({ theme }: any) => {
  return {
    '.wallet-modal-background': {
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

    '.wallet-modal-container': {
      position: 'absolute',
      right: '4.375rem',
      top: '4.375rem',
      borderRadius: '0.75rem',
      background: theme.bg.secondary,
      boxShadow: theme.shadow.md,
      width: '22.5rem',
      zIndex: 30,

      [theme.breakpoints.down('sm')]: {
        left: '50%',
        right: 'unset',
        transform: 'translateX(-50%)',
      },

      '.wallet-header': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem 1rem 2rem 1rem',
        borderBottom: `0.5px solid ${theme.border.primary}`,

        h2: {
          textAlign: 'center',
          fontWeight: 500,
        },

        '.avatar-icon': {
          width: '2.5rem',
          height: '2.5rem',
        },

        p: {
          fontSize: '0.75rem',
          textAlign: 'center',
        },

        '.wallet-header-top-box': {
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '1.5rem',

          '.wallet-address': {
            fontSize: '0.875rem',
            color: theme.text.primary,

            '&:hover': {
              cursor: 'pointer',
            }
          },

          '.wallet-menu-button': {
            svg: {
              width: '1rem',
              height: '1rem',
            }
          },

          '.wallet-exit-button': {
            svg: {
              color: '#E10916',
              width: '1rem',
              height: '1rem',
            }
          },

          '.copied-alert': {
            position: 'absolute',
            top: '2.75rem',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 300,

            display: 'flex',
            alignItems: 'center',
            background: theme.primary[1],
            borderRadius: '0.5rem',
            padding: '0.5rem',

            svg: {
              width: '1rem',
              height: '1rem',
              path: {
                stroke: theme.success.dark,
              },
              marginRight: '0.5rem',
            },

            p: {
              color: theme.success.dark,
            }
          },

          '.wallet-menu': {
            position: 'absolute',
            top: '3rem',
            left: '1rem',
            zIndex: 300,

            background: theme.bg.secondary,
            padding: '0.375rem',
            borderRadius: '0.5rem',
            border: `1px solid ${theme.border.primary}`,

            '.MuiMenuItem-root': {
              svg: {
                width: '1rem',
                height: '1rem',

                path: {
                  color: theme.text.primary,
                  stroke: theme.text.primary,
                },

                marginRight: '0.5rem',
              },

              color: theme.text.primary,
              borderRadius: '0.5rem',

              '&.menu-copied-address': {
                svg: {
                  path: {
                    stroke: theme.success.dark,
                  },
                },

                p: {
                  color: theme.success.dark,
                }
              }
            }
          }
        }
      },

      '.wallet-body': {
        minHeight: '26.125rem',
        maxHeight: '26.125rem',
        overflow: 'auto',

        h4: {
          marginTop: '1.5rem',
          marginLeft: '1rem',
          marginBottom: '1rem',
          fontWeight: 500,
        },

        '&::-webkit-scrollbar': {
          width: '0.1rem',
        },

        '&::-webkit-scrollbar-track': {
          background: 'none',
        },

        '&::-webkit-scrollbar-thumb': {
          background: theme.bg.slider,
        },

        '&::-webkit-scrollbar-thumb:hover': {
          background: theme.bg.slider,
        },

        '.token-item': {
          padding: '0.75rem 1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '0.5rem',

          '&:hover': {
            cursor: 'pointer',
            background: theme.primary[2.5],
          },

          '.token-summary': {
            width: '100%',
            marginLeft: '0.75rem',
            marginRight: '0.5rem',

            '.token-summary-box': {
              display: 'flex',
              justifyContent: 'space-between',

              '&.bottom': {
                color: theme.text.paragraph,
              }
            }
          },

          svg: {
            width: '0.5rem',
            height: '0.75rem',

            path: {
              fill: theme.text.paragraph,
            }
          }
        },
      },

      '.wallet-footer': {
        width: '100%',
        borderTop: `0.5px solid ${theme.border.primary}`,

        '.wallet-tab': {
          '.MuiTabs-flexContainer': {
            display: 'flex',
            justifyContent: 'space-around',
            width: '100%',
            button: {
              width: '50%',
              textTransform: 'capitalize',

              '&.Mui-selected': {
                color: theme.lightcurve[0],
              }
            }
          },

          '.MuiTabs-indicator': {
            display: 'none',
          }
        }
      }
    }
  };
});
