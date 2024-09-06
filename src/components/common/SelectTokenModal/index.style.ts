import styled from '@emotion/styled';

export const SelectTokenModalStyle = styled('div')(({ theme }: any) => {
  return {
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 20,

    width: '28.25rem',
    borderRadius: '0.5rem',
    background: theme.bg.secondary,
    boxShadow: theme.shadow.md,
    padding: '1.5rem 0',

    animationName: 'appear',
    animationDuration: '0.5s',

    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      top: '9em',
      paddingBottom: '4rem',
      width: 'calc(100% + 2rem)',
    },

    '&.close': {
      animationName: 'disappear',
      opacity: '0',

      '@keyframes disappear': {
        from: {
          opacity: '1',
          transform: 'translate(-50%, 0)',
        },
        to: {
          opacity: '1',
          transform: 'translate(-50%, 100%)',
        }
      },
    },

    '@keyframes appear': {
      from: {
        transform: 'translate(-50%, 100%)',
      },
      to: {
        transform: 'translate(-50%, 0)',
      }
    },

    '.select-token-container': {
      padding: '0 1.5rem',
    },

    '.select-token-modal-title': {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      '.MuiIconButton-root': {
        position: 'absolute',
        left: 0,
        svg: {
          width: '0.5rem',
          height: '0.5rem',
        },
      }
    },

    '.search-input-component': {
      marginTop: '2.5rem',
    },

    '.select-token-common-tokens': {
      marginTop: '1.5rem',

      '.select-token-common-tokens-list': {
        display: 'flex',
        marginTop: '0.75rem',

        '.select-token-chain-box': {
          display: 'flex',
          alignItems: 'center',
          borderRadius: '0.75rem',
          padding: '0.375rem 0.5rem 0.375rem 0.5rem',
          background: theme.primary[2.5],

          p: {
            marginLeft: '0.25rem',
          },

          '.token-image': {
            borderRadius: '100%',
            width: '1.25rem',
            height: '1.25rem',

            img: {
              borderRadius: '100%',
            }
          }
        }
      }
    },

    '.select-token-balance-list': {
      marginTop: '2.5rem',
      borderTop: `1px solid ${theme.border.primary}`,

      '.select-token-balance-item': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 1.5rem',
        cursor: 'pointer',

        '&:hover': {
          background: theme.primary[2.5],
        },

        '.token-wrapper': {
          display: 'flex',
          alignItems: 'center',

          '.token-name-wrapper': {
            marginLeft: '1rem',
          },

          '.token-image': {
            borderRadius: '100%',

            img: {
              borderRadius: '100%',
            }
          }
        },
      }
    }

  };
});
