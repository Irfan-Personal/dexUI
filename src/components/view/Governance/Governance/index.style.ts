import styled from '@emotion/styled';

export const GovernanceViewStyle = styled('main')(({ theme }: any) => {
  return {
    marginTop: '4.25rem',
    marginBottom: '4rem',
    padding: '3rem',

    [theme.breakpoints.down('sm')]: {
      padding: '3rem 1rem 6rem 1rem',
    },

    '.governance-banner': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: theme.bg.banner,
      width: '100%',
      borderRadius: '1rem',
      padding: '3rem 2rem',

      [theme.breakpoints.down('md')]: {
        paddingBottom: '1.5rem',
      },

      '.governance-title': {
        display: 'flex',
        alignItems: 'center',
        color: theme.text.primary,
        marginBottom: '1rem',

        '.governance-bank-icon': {
          fill: theme.text.primary,
          marginLeft: '0.75rem',
        },

        [theme.breakpoints.down('md')]: {
          justifyContent: 'space-between',
        },
      },

      '.governanace-description': {
        color: theme.text.paragraph,
      },

      '.governance-vote-image': {
        marginRight: '9.5rem !important',

        [theme.breakpoints.down('md')]: {
          display: 'none'
        },
      }
    },

    '.governance-proposals': {
      marginTop: '3rem',

      '.governance-proposals-title': {
        color: theme.text.primary,
      },

      '.governance-proposals-description': {
        marginTop: '0.5rem',
        color: theme.text.paragraph,
      },

      '.governance-proposals-actions': {
        marginTop: '0.75rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

        '.governance-proposals-select': {
          width: '11.25rem',
          height: '2rem',
          color: theme.text.paragraph,
          lineHeight: '1rem',

          '.MuiOutlinedInput-root': {
            height: '2rem',

            '.MuiSelect-select': {
              display: 'flex',
              alignItems: 'center',
              padding: '0.5rem 0 0.5rem 0.75rem !important',
            }
          }
        },

        '.governance-proposals-create': {
          color: theme.lightcurve[0],
          cursor: 'pointer',
        }
      },

      '.governance-proposals-items': {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        marginTop: '1.5rem',

        '.governance-empty-img': {
          marginTop: '4rem',
        }
      }
    }
  };
});
