import styled from '@emotion/styled';

export const InfoChartStyle = styled('div')(({ theme }: any) => {
  return {
    background: theme.bg.secondary,

    '.info-chart-header': {
      display: 'flex',
      alignItems: 'start',
      justifyContent: 'space-between',
      padding: '1rem',

      '.info-chart-volume': {
        h2: {
          fontWeight: 500,
          marginTop: '0.5rem',
          marginBottom: '0.25rem',
        },
      },

      '.info-chart-tab': {
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        background: theme.primary[40],
        border: `0.5px solid ${theme.primary[20]}`,
        borderRadius: '0.75rem',
        padding: '0.125rem',
        minHeight: '2rem',
        width: 'fit-content',


        [theme.breakpoints.down('sm')]: {
          left: 'unset',
          right: '2rem',
          transform: 'unset',
        },

        '.MuiTabs-scroller': {
          '.MuiButtonBase-root': {
            color: theme.lightcurve[0],
            padding: '0.25rem 0.25rem',
            minHeight: '1.5rem',
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

      '.info-chart-period': {
        display: 'flex',

        [theme.breakpoints.down('sm')]: {
          marginTop: '2.5rem',
        },

        '.MuiButtonBase-root': {
          padding: '0',
          minWidth: '1.75rem !important',
          height: '1.25rem',
          marginLeft: '0.25rem',
          boxShadow: 'none',

          background: theme.primary[5],
          p: {
            color: theme.text.paragraph,
          },

          '&.selected': {
            background: theme.lightcurve[0],
            p: {
              color: theme.text.button,
            },
          }
        }
      },
    },

    '.info-chart-timeline': {
      display: 'flex',
      padding: '0.75rem 1rem',
      justifyContent: 'space-between',

      borderTop: `1px solid ${theme.border.primary}`,
      borderBottom: `1px solid ${theme.border.primary}`,
    },

    '.info-chart-summary': {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '4.5rem 1rem 1rem 1rem',

      '.summary-item': {
        '.summary-title': {
          display: 'flex',
          marginBottom: '0.25rem',
        },

        '.summary-percent': {
          display: 'flex',
          alignItems: 'center',
          marginTop: '0.25rem',
          color: theme.error.dark,

          p: {
            fontSize: '0.75rem',
          },

          svg: {
            marginLeft: '0.25rem',
          },

          '&.increase': {
            color: theme.success.dark,
          }
        },

        '.summary-total-tokens-locked': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
        }
      }
    },

    '.empty-chart-box': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '2rem',
      background: theme.bg.primary,
      color: theme.text.paragraph,

      p: {
        marginTop: '0.75rem',
      },

      svg: {
        path: {
          fill: theme.text.paragraph,
        }
      }
    }
  };
});