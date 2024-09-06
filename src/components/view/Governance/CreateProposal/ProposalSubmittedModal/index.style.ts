import styled from '@emotion/styled';

export const ProposalSubmittedStyle = styled('div')(({ theme }: any) => {
  return {
    width: '100%',
    height: '100%',

    '.proposal-submitted-background': {
      position: 'fixed',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.5)',
      zIndex: 10,
    },

    '.proposal-submitted-modal-container': {
      position: 'absolute',
      left: '50%',
      top: '50%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '10rem',
      transform: 'translate(-50%, -50%)',
      width: '23.125rem',
      padding: '2.5rem 1.5rem 1.5rem 1.5rem',
      borderRadius: '0.5rem',
      background: `${theme.bg.secondary} !important`,
      boxShadow: theme.shadow.sm,
      zIndex: 10,

      [theme.breakpoints.down('md')]: {
        position: 'fixed',
      },

      svg: {
        marginTop: '2rem',
      },

      '.proposal-submitted-content': {
        marginTop: '1.5rem',
        fontWeight: 500,
        width: '11.8rem',
        textAlign: 'center',
      },

      a: {
        color: theme.lightcurve[0],
        textDecorationColor: theme.lightcurve[0],
      },

      button: {
        marginTop: '2rem',
      }
    }
  };
});
