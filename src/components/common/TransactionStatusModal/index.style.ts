import styled from '@emotion/styled';

export const TransactionStatusStyle = styled('div')(({ theme }: any) => {
  return {
    width: '100%',
    height: '100%',

    '.transaction-status-background': {
      position: 'fixed',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.5)',
      zIndex: 30,
    },

    '.transaction-status-modal-container': {
      position: 'fixed',
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
      zIndex: 30,

      [theme.breakpoints.down('md')]: {
        position: 'fixed',
      },

      '.transaction-status-icon': {
        position: 'relative',
        marginTop: '2rem',

        '.circular-progress': {
          width: '5rem !important',
          height: '5rem !important',

          '&.foreground': {
            color: theme.lightcurve[0],
          },

          '&.background': {
            left: 0,
            position: 'absolute',
            color: '#EDEDED',
          }
        }
      },

      h3: {
        fontSize: '1.5rem',
      },

      '.transaction-status-content': {
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
      },

      '.confirm-transaction-wallet': {
        marginTop: '1rem',
        marginBottom: '1rem',
      }
    }
  };
});
