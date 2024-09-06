import styled from '@emotion/styled';

export const TokensComponentStyle = styled('div')(({ theme }: any) => {
  return {
    '.info-header': {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '3rem',
      marginBottom: '2rem',

      [theme.breakpoints.down('md')]: {
        marginTop: '1rem',
      },

      h6: {
        fontSize: '1.5rem',
        marginBottom: '0.25rem',
      },

      '.info-path': {
        display: 'flex',
        alignItems: 'center',

        color: theme.lightcurve[0],

        svg: {
          marginLeft: '0.5rem',
          marginRight: '0.5rem',
        },

        h5: {
          cursor: 'pointer',
        }
      },

      '.info-view-contract': {
        display: 'flex',
        alignItems: 'center',
        color: theme.lightcurve[0],

        '.MuiIconButton-root': {
          width: '1rem',
          height: '1rem',
          marginLeft: '0.5rem',
          marginRight: '1rem',

          svg: {
            width: '1rem',
            height: '1rem',
            color: theme.lightcurve[0],
          }
        }
      },
    },

    '.token-header': {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '2rem',

      [theme.breakpoints.down('sm')]: {
        display: 'unset',
      },

      '.token-header-left-box': {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      },

      '.token-summary': {
        display: 'flex',
        alignItems: 'center',

        '.token-summary-image-1': {
          zIndex: 10,
        },

        '.token-summary-image-2': {
          marginLeft: '-0.75rem',
          zIndex: 1,
        },

        '.token-summary-detail': {
          marginLeft: '1rem',

          '.token-summary-name': {
            display: 'flex',
            alignItems: 'center',

            '.token-summary-share': {
              background: theme.primary[40],
              borderRadius: '0.25rem',
              height: 'fit-content',
              marginLeft: '0.5rem',

              span: {
                padding: '0.25rem 0.5rem',
                color: theme.lightcurve[0],

                fontSize: '0.75rem',
                lineHeight: '0.875rem',
              },
            }
          },

          '.token-price': {
            '.token-price-increasement': {
              color: theme.success.dark,

              '&.decrease': {
                color: theme.error.dark,
              }
            }
          }
        },
      },

      '.like-button': {
        width: 'fit-content',
        minWidth: '3.5rem !important',
        border: 'none',
        background: theme.primary[2.5],

        svg: {
          width: '1.25rem',
          height: '1.25rem',
          color: theme.lightcurve[0],
        }
      },

      '.token-actions': {
        display: 'flex',
        alignItems: 'center',

        [theme.breakpoints.down('sm')]: {
          display: 'unset',
          width: '100%',
        },

        '.MuiButtonBase-root': {
          width: 'max-content',
          minWidth: '5.625rem',
          paddingTop: '0.5rem',
          paddingBottom: '0.5rem',
          marginLeft: '0.75rem',

          [theme.breakpoints.down('sm')]: {
            width: '100%',
            marginTop: '0.75rem',
            marginLeft: 0,
          },

          '&.MuiButton-outlined': {
            color: theme.lightcurve[0],
            borderColor: theme.lightcurve[0],
          }
        }
      }
    },

    '.table-title': {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '4rem',
      marginBottom: '1.5rem',

      '.view-all': {
        display: 'flex',
        alignItems: 'center',
        color: theme.lightcurve[0],

        svg: {
          width: '0.5rem',
          height: '0.5rem',
          marginLeft: '0.25rem',
        }
      }
    },

    '.token-search-box': {
      width: '20.25rem',
      marginBottom: '1rem',
    }
  };
});