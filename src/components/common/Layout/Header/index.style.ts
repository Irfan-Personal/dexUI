import styled from '@emotion/styled';

export const HeaderStyle = styled('div')(({ theme }: any) => {
  return {
    position: 'fixed',
    left: 0,
    right: 0,
    zIndex: 30,
    borderBottom: `1px solid ${theme.primary[20]}`,
    background: theme.bg.primary,

    '.header-logo': {
      fill: theme.primary[0],
    },

    '.header-container': {
      position: 'relative',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '4.25rem',
      padding: '0 1.5rem',

      [theme.breakpoints.down('sm')]: {
        padding: '0 1rem',
      },

      '.header-menu': {
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',

        '.header-menu-item': {
          display: 'flex',
          alignItems: 'center',
          height: '100%',
          color: theme.text.body,
          fontWeight: 500,
          marginRight: '3rem',
          cursor: 'pointer',
          animationDuration: '0.5s',

          '&:hover': {
            opacity: '0.85',
          },

          '&.active': {
            borderBottom: `2.5px solid ${theme.lightcurve[0]}`,
            color: theme.lightcurve[0],
            h5: {
              fontWeight: '600',
            }
          },

          [theme.breakpoints.down('lg')]: {
            display: 'none'
          },
        },
      },

      '.header-actions': {
        display: 'flex',
        alignItems: 'center',

        '.header-menu-list-button': {
          marginLeft: '0.5rem',
          color: theme.text.primary,
        },
      }
    }
  };
});
