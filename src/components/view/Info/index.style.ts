import styled from '@emotion/styled';

export const InfoViewStyle = styled('main')(({ theme }: any) => {
  return {
    marginTop: '8rem',
    marginBottom: '6rem',
    padding: '0 10rem',

    [theme.breakpoints.down('lg')]: {
      marginTop: '6.5rem',
      padding: '0 3rem',
    },

    [theme.breakpoints.down('sm')]: {
      marginTop: '6.5rem',
      padding: '0 1rem',
    },

    '.info-top-box': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'relative',

      [theme.breakpoints.down('md')]: {
        display: 'unset',
      },

      '.info-tab': {
        background: theme.primary[40],
        border: `0.5px solid ${theme.primary[20]}`,
        borderRadius: '0.75rem',
        padding: '0.25rem',
        minHeight: '2.25rem',
        width: 'fit-content',

        '.MuiTabs-scroller': {
          '.MuiButtonBase-root': {
            color: theme.lightcurve[0],
            padding: '0.5rem 0.75rem',
            minHeight: '2.25rem',
            borderBottom: 'none',
            textTransform: 'capitalize',
            zIndex: 10,

            '&.Mui-selected': {
              color: theme.text.button,
            },
          },
        },

        '.MuiTabs-indicator': {
          background: theme.lightcurve[0],
          height: '100%',
          borderRadius: '0.75rem',
        }
      },

      '.info-search-box': {
        [theme.breakpoints.down('md')]: {
          marginTop: '2rem',
        },
      },
    },
  };
});