import styled from '@emotion/styled';

export const FooterStyle = styled('div')(({ theme }: any) => {
  return {
    position: 'fixed',
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
    borderTop: `1px solid ${theme.primary[20]}`,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '4rem',
    background: theme.bg.primary,

    '.footer-menu': {
      display: 'flex',
      width: '100%',
      height: '100%',
      alignItems: 'center',
      margin: 0,

      '.footer-menu-item': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
        height: '100%',
        color: theme.text.body,
        fontWeight: 500,
        cursor: 'pointer',
        animationDuration: '0.5s',

        '&:hover': {
          opacity: '0.85',
        },

        '&.active': {
          borderTop: `2.5px solid ${theme.lightcurve[0]}`,
          color: theme.lightcurve[0],
          h5: {
            fontWeight: '600',
          }
        }
      }
    }
  };
});
