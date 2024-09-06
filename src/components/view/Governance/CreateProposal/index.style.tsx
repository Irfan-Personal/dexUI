import styled from '@emotion/styled';

export const CreateProposalViewStyle = styled('div')(({ theme }: any) => {
  return {
    position: 'relative',
    marginTop: '4.25rem',
    marginBottom: '4rem',
    padding: '3rem 17.1875rem',

    [theme.breakpoints.down('lg')]: {
      padding: '3rem 3rem 6rem 3rem',
    },

    [theme.breakpoints.down('sm')]: {
      padding: '3rem 1rem 6rem 1rem',
    },

    '.create-proposal-path': {
      display: 'flex',
      alignItems: 'center',
      color: theme.lightcurve[0],
      svg: {
        width: '1rem',
        margin: '0 0.5rem',
      }
    },

    '.MuiFormControl-root': {
      width: '100%',
    },

    '.create-proposal': {
      background: theme.bg.secondary,
      borderTop: `4px solid ${theme.lightcurve[0]}`,
      borderRadius: '0.25rem 0.25rem 0.5rem 0.5rem',
      boxShadow: theme.shadow.sm,
      marginTop: '1rem',

      '.create-proposal-header': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '1.5rem 7rem 2rem 7rem',

        [theme.breakpoints.down('md')]: {
          padding: '1.5rem 1rem 2rem 1rem',
        },

        '.create-proposal-title': {
          textAlign: 'center',
        },

        '.create-proposal-description': {
          color: theme.opacities[20],
          textAlign: 'center',
          marginTop: '0.75rem',
          width: '100%',
          span: {
            color: theme.lightcurve[0],
          }
        }
      },

      '.create-proposal-body': {
        '.proposal-author-box': {
          borderTop: `0.5px solid ${theme.border.primary}`,
          borderBottom: `0.5px solid ${theme.border.primary}`,
          padding: '1rem 1.5rem 1.5rem 1.5rem',

          '.input-component-container': {
            width: '100%',
          },

          [theme.breakpoints.down('md')]: {
            padding: '1rem 1rem 1.5rem 1rem',
          },
        },

        '.proposal-info-box': {
          position: 'relative',
          padding: '1.5rem 1.5rem 2rem 1.5rem',

          [theme.breakpoints.down('md')]: {
            padding: '1rem',
          },

          '.proposal-incentivization': {
            marginTop: '0',
          },

          '.proposal-title': {
            marginTop: '1.5rem'
          },

          '.proposal-summary': {
            marginTop: '1.5rem'
          },

          '.proposal-description': {
            marginTop: '1.5rem'
          },

          '.proposal-link': {
            marginTop: '1.5rem',
            marginBottom: '1.5rem',
          }
        }
      }
    }
  };
});
