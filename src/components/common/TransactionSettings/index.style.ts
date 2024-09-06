import styled from '@emotion/styled';

export const TransactionSettingsStyle = styled('div')(({ theme }: any) => {
  return {
    '.transactioin-settings-slipage-tolerance': {
      display: 'flex',
      alignItems: 'center',
      marginTop: '2rem',

      svg: {
        marginLeft: '0.25rem',
      }
    },

    '.transaction-settings-slipage-tolerance-switcher': {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '0.75rem',

      '.switcher-box': {
        borderRadius: '0.25rem',
        border: `0.75px solid ${theme.border.primary}`,
        padding: '0.75rem 1rem',
        width: '4.375rem',
        display: 'flex',
        justifyContent: 'center',
        cursor: 'pointer',

        '&.selected': {
          background: theme.lightcurve[0],
          color: theme.text.button,
          border: `0.75px solid ${theme.lightcurve[20]}`,
        }
      },

      '.slipage-tolerance-input': {
        width: '11.5rem',

        '.MuiInputBase-input': {
          textAlign: 'right',
        }
      }
    },

    '.transaction-deadline-label': {
      display: 'flex',
      alignItems: 'center',
      marginTop: '2rem',

      svg: {
        marginLeft: '0.25rem',
      }
    },

    '.transaction-deadline-input': {
      display: 'flex',
      alignItems: 'center',
      marginTop: '0.75rem',

      '.MuiFormControl-root': {
        width: '5.625rem',
        height: '2.75rem',
        marginRight: '0.75rem',
      }
    },
  };
});
