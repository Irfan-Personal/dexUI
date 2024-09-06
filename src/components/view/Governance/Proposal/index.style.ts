import styled from '@emotion/styled';

export const ProposalViewStyle = styled('div')(({ theme }: any) => {
  return {
    position: 'relative',
    marginTop: '4.25rem',
    marginBottom: '4rem',
    padding: '3rem',

    [theme.breakpoints.down('lg')]: {
      padding: '3rem 1rem',
    },

    '.proposal-path': {
      display: 'flex',
      alignItems: 'center',
      color: theme.lightcurve[0],
      svg: {
        width: '1rem',
        margin: '0 0.5rem',
      }
    },

    '.proposal-container': {
      padding: '5rem 10rem',

      [theme.breakpoints.down('lg')]: {
        padding: '3rem 0rem',
      },

      '.proposal-header': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: '1.5rem',
        borderBottom: `0.5px solid ${theme.border.primary}`,

        [theme.breakpoints.down('sm')]: {
          display: 'unset',
        },

        '.proposal-badges': {
          display: 'flex',
          '.proposal-type-badge': {
            marginLeft: '0.75rem',
          }
        },

        '.proposal-header-title': {
          marginTop: '1rem',
        },

        '.proposal-header-short': {
          marginTop: '1rem',
        },

        '.proposal-header-actions': {
          display: 'flex',
          alignItems: 'center',

          [theme.breakpoints.down('sm')]: {
            marginTop: '2rem',
          },

          '.proposal-header-vote-button': {
            width: '14.125rem',
            marginRight: '0.5rem',

            [theme.breakpoints.down('sm')]: {
              width: '100%',
            },
          },

          '.proposal-header-header-menu-list-button': {
            width: '2.5rem',
            height: '2.5rem',
            marginLeft: '0.5rem',
            color: theme.text.primary,
          }
        }
      },

      '.proposal-body': {
        padding: '2.5rem 0',

        '.MuiGrid-item': {
          width: '100%',
        },

        '.proposal-body-summary': {
          marginBottom: '2rem',
        },

        '.proposal-body-description': {
          color: theme.text.paragraph,
          marginBottom: '4rem',
          whiteSpace: 'pre-line',
        },

        '.your-voting-info-component': {
          marginBottom: '2rem',
        },

        '.status-history-component': {
          marginBottom: '2rem',
        },

        '.current-result-component': {
          marginBottom: '2rem',
        },
      }
    }
  };
});
