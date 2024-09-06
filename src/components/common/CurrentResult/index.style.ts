import styled from '@emotion/styled';

export const CurrentResultComponentStyle = styled('div')(({ theme }: any) => {
  return {
    background: theme.bg.secondary,
    borderRadius: '0.5rem',
    border: `0.5px solid ${theme.border.primary}`,
    boxShadow: theme.shadow.sm,

    '.current-result-header': {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '1.5rem',
      borderBottom: `0.5px solid ${theme.border.primary}`,
    },

    '.current-result-body': {
      padding: '2.5rem 1rem 2rem 1rem',

      '.current-result-circular-progress': {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '8.75rem !important',
        marginBottom: '2.5rem',

        '.MuiCircularProgress-root': {
          width: '8.75rem !important',
          height: '8.75rem !important',
        },

        '.circular-progress-vote-no': {
          position: 'absolute',
          color: theme.secondary[0],
        },

        '.circular-progress-vote-yes': {
          position: 'absolute',
          color: theme.lightcurve[0],
        },

        h3: {
          color: theme.lightcurve[0],
        }
      },

      '.current-result-linear-progress': {
        marginTop: '0.75rem',
        marginBottom: '1.5rem',

        '.MuiLinearProgress-root': {
          height: '0.5rem',
          background: '#E3E3E4',
        },

        '&.vote-yes': {
          '.MuiLinearProgress-bar': {
            background: theme.lightcurve[0],
          },

          '.vote-yes-percent': {
            color: theme.lightcurve[0],
          }
        },

        '&.vote-no': {
          '.MuiLinearProgress-bar': {
            background: theme.secondary[0],
          },

          '.vote-no-percent': {
            color: theme.secondary[0],
          }
        },

        '&.vote-pass': {
          '.MuiLinearProgress-bar': {
            background: '#45F4FF',
          },

          '.vote-pass-percent': {
            color: '#45F4FF',
          }
        },

        '.current-result-linear-progress-info': {
          marginTop: '0.25rem',
          display: 'flex',
          justifyContent: 'space-between',

          span: {
            fontWeight: 400,
            color: theme.text.paragraph,
            fontSize: '0.75rem',
          },

          '.current-result-linear-progress-vote yes-percet': {
            fontWeight: 500,
            color: theme.lightcurve[0],
          }
        }
      },

      '.current-result-linear-state': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '1rem',

        '.current-result-linear-state-info': {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'end',
        }
      },

      '.current-result-linear-minimum-approval': {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '0.75rem',
      },

      '.current-result-linear-total-voting-power': {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '1.5rem',
      },

    },
  };
});
