import styled from '@emotion/styled';

export const VoteModalStyle = styled('div')(({ theme }: any) => {
  return {
    '.vote-modal-background': {
      position: 'fixed',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.5)',
      zIndex: 10,
    },

    '.vote-modal-container': {
      position: 'fixed',
      left: '50%',
      top: '50%',
      marginBottom: '10rem',
      transform: 'translate(-50%, -50%)',
      width: '25.625rem',
      borderRadius: '0.5rem',
      background: `${theme.bg.secondary} !important`,
      boxShadow: theme.shadow.md,
      zIndex: 10,

      [theme.breakpoints.down('sm')]: {
        width: 'calc(100% - 2rem)',
        left: '1rem',
        transform: 'translateY(-50%)',
      },

      '.vote-modal-header': {
        display: 'flex',
        justifyContent: 'center',
        padding: '1.5rem',
        borderBottom: `0.5px solid ${theme.border.primary}`,
        color: theme.text.primary,
      },

      '.vote-modal-body': {
        padding: '1rem',

        '.vote-modal-voting-power': {
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '2rem',

          '.vote-modal-voting-power-dex': {
            display: 'flex',
            alignItems: 'center',

            svg: {
              path: {
                fill: theme.lightcurve[0],
              },
              marginLeft: '0.5rem',
            }
          }
        }
      },

      '.vote-modal-footer': {
        display: 'flex',
        padding: '2rem 1rem 1.5rem 1rem',

        '.vote-modal-cancel': {
          width: '10rem',
          marginRight: '1rem',
          background: 'none',

          '&:hover': {
            P: {
              textDecoration: 'underline',
            }
          },

          P: {
            color: theme.opacities[20],
          }
        }
      }
    }
  };
});
