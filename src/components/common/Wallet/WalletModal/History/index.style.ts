import styled from '@emotion/styled';

export const HistoryComponentStyle = styled('div')(({ theme }: any) => {
  return {
    h4: {
      textAlign: 'center',
      fontWeight: 500,
      marginTop: '1.5rem',
      marginBottom: '1.5rem',
    },

    '.infinite-scroll-component': {
      '&::-webkit-scrollbar': {
        width: '0.3rem',
      },

      '&::-webkit-scrollbar-track': {
        background: 'none',
      },

      '&::-webkit-scrollbar-thumb': {
        background: theme.bg.slider,
      },

      '&::-webkit-scrollbar-thumb:hover': {
        background: theme.bg.slider,
      },

      '.loader-component': {
        display: 'flex',
        justifyContent: 'center',
      },

      '.transaction-item': {
        padding: '1.5rem 1rem',
        borderBottom: `0.5px solid ${theme.border.primary}`,

        '.transaction-item-main': {
          display: 'flex',
          marginTop: '1rem',

          '.transaction-type-icon': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: '2rem',
            height: '2rem',
            borderRadius: '100%',
            border: `1px solid ${theme.lightcurve[0]}`,

            svg: {
              width: '1rem',
              height: '1rem',
            }
          },

          '.transaction-summary': {
            width: '100%',
            marginLeft: '0.75rem',

            div: {
              display: 'flex',
              justifyContent: 'space-between',

              '.transaction-values': {
                display: 'flex',
                justifyContent: 'space-between',
              },

              '.transaction-status': {
                display: 'flex',
                justifyContent: 'space-between',
              }
            }
          }
        }
      }
    }
  };
});
