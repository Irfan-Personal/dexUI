import styled from '@emotion/styled';

export const TransactionSettingsModalStyle = styled('div')(({ theme }: any) => {
  return {
    position: 'absolute',
    top: '4rem',
    transform: 'translateX(12rem)',
    padding: '1.5rem 1.5rem 1.5rem 2rem',
    background: theme.bg.secondary,
    width: '29.75rem',
    borderRadius: '0.5rem',
    boxShadow: theme.shadow.md,

    animationName: 'transaction-settings-appear',
    animationDuration: '0.5s',

    '@keyframes transaction-settings-appear': {
      from: {
        opacity: 0,
      },
      to: {
        opacity: 1,
      }
    },

    [theme.breakpoints.down('sm')]: {
      position: 'fixed',
      width: '100%',
      transform: 'unset',
      top: 'unset',
      bottom: 0,
      left: 0,
      zIndex: 200,
      animationName: 'transaction-settings-appear',

      '@keyframes transaction-settings-appear': {
        from: {
          transform: 'translateY(100%)',
        },
        to: {
          transform: 'translateY(0)',
        }
      },
    },

    '.transaction-settings-title': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',

      paddingBottom: '1.5rem',

      borderBottom: `1px solid ${theme.border.primary}`,

      svg: {
        cursor: 'pointer',
      }
    },

    '.transaction-settings-main': {
      '.transactioin-settings-slipage-tolerance': {
        display: 'flex',
        alignItems: 'center',
        marginTop: '2rem',

        svg: {
          marginLeft: '0.25rem',
        }
      },

      '.transaction-settings-slipage-tolerance-switcher': {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '0.75rem',

        '.switcher-box': {
          borderRadius: '0.25rem',
          border: `0.75px solid ${theme.border.primary}`,
          padding: '0.75rem 1rem',
          width: '4.375rem',
          display: 'flex',
          justifyContent: 'center',
          cursor: 'pointer',

          '&.selected': {
            background: theme.lightcurve[0],
            color: theme.text.button,
            border: `0.75px solid ${theme.lightcurve[20]}`,
          }
        },

        '.MuiInputBase-root': {
          width: '11.5rem',

          '.MuiInputBase-input': {
            textAlign: 'right',
          }
        }
      },

      '.transaction-deadline-label': {
        display: 'flex',
        alignItems: 'center',
        marginTop: '2rem',

        svg: {
          marginLeft: '0.25rem',
        }
      },

      '.transaction-deadline-input': {
        display: 'flex',
        alignItems: 'center',
        marginTop: '0.75rem',

        '.MuiFormControl-root': {
          width: '5.625rem',
          height: '2.75rem',
          marginRight: '0.75rem',
        }
      },

      '.MuiButtonBase-root': {
        marginTop: '2.5rem',

        h4: {
          fontWeight: 500,
        }
      }
    }
  };
});
