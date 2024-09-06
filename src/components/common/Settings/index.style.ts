import styled from '@emotion/styled';

export const SettingsModalStyle = styled('div')(({ theme }: any) => {
  return {
    position: 'absolute',
    right: '3rem',
    top: '4.25rem',

    width: '100%',
    height: '100%',
    zIndex: 201,

    [theme.breakpoints.down('md')]: {
      top: 0,
      right: 0,
    },

    '.settings-background': {
      position: 'fixed',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.5)',
      zIndex: 200,
    },

    '.settings-modal-container': {
      position: 'sticky',
      float: 'right',
      marginBottom: '10rem',
      width: '25.25rem',
      borderRadius: '0.5rem',
      background: theme.bg.secondary,
      boxShadow: theme.shadow.sm,
      zIndex: 201,

      [theme.breakpoints.down('md')]: {
        width: 'calc(100% - 2rem)',
        top: '5.5rem',
        position: 'absolute',
        float: 'none',
        margin: '0 1rem 0 1rem',
      },

      '.settings-modal-header': {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem 1rem 1.5rem 1rem',
        color: theme.text.primary,
        borderBottom: `0.5px solid ${theme.border.primary}`,

        [theme.breakpoints.down('md')]: {
          padding: '1rem',
        },

        '.MuiIconButton-root': {
          position: 'absolute',
          right: '1rem',
          top: '1rem',
          svg: {
            path: {
              stroke: theme.text.primary,
            }
          }
        },
      },

      '.settings-modal-body': {
        padding: '2.5rem 1.5rem 2rem 1.5rem',

        [theme.breakpoints.down('md')]: {
          padding: '1.5rem 1rem 1rem 1rem',
        },

        '.settings-dark-mode': {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        },

        '.settings-currency': {
          marginTop: '2rem',

          '.currency-dropdown': {
            marginTop: '1rem',
          }
        },

        '.title': {
          color: theme.text.primary,
        },

        '.description': {
          marginTop: '0.25rem',
          color: theme.text.paragraph,
        },

        '.slipage-tolerance-input': {
          width: '6.875rem !important',
        }
      },

      '.settings-modal-footer': {
        display: 'flex',
        padding: '1.5rem',
        borderTop: `0.5px solid ${theme.border.primary}`,

        '.settings-modal-cancel': {
          marginRight: '1rem',
          background: 'none',
          borderColor: theme.lightcurve[0],
          color: theme.lightcurve[0],
          P: {
            color: theme.lightcurve[0],
          }
        }
      },
    }
  };
});
