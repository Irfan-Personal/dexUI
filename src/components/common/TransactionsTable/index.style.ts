import styled from '@emotion/styled';

export const TransactionsTableStyle = styled('div')(({ theme }: any) => {
  return {
    '.transactions-filter-box': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',

      '.transactions-search-input': {
        marginTop: '1rem',
        width: '20.25rem',
      },

      '.transactions-filter-dropdown': {
        minHeight: '2rem',
        width: '11.25rem',

        '.MuiSelect-select': {
          paddingTop: '0.25rem !important',
          paddingBottom: '0.25rem !important',
          display: 'flex',
          alignItems: 'center',
        }
      }
    },

    '.transactions-table': {
      thead: {
        p: {
          color: theme.text.paragraph,
        }
      },

      tbody: {
        tr: {
          td: {
            border: 'none',
          }
        },

        '.name-td': {
          display: 'flex',
          alignItems: 'center',

          '.token1-image': {
            marginLeft: '1.5rem',
          },

          '.token2-image': {
            marginLeft: '-0.5rem',
            marginRight: '0.625rem',
          }
        },

        '.action-td': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'end',
          color: theme.lightcurve[0],

          svg: {
            marginLeft: '0.25rem',
            width: '1rem',
            height: '1rem',
          }
        },

        '.details-td': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'end',

          '.arrow-icon': {
            marginLeft: '1.5rem',
            marginRight: '1.5rem',
            color: theme.lightcurve[0],
          },

          p: {
            marginLeft: '0.25rem',
          }
        }
      }
    },

    '.transactions-pager': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'end',

      '.MuiIconButton-root': {
        marginLeft: '1.5rem',
        marginRight: '1.5rem',
        color: theme.lightcurve[0],

        svg: {
          width: '1.25rem',
          height: '1.25rem',
        },

        '&.Mui-disabled': {
          color: theme.primary[20],
        }
      },

      '.row-count-dropdown': {
        width: '10rem',
        height: '2rem',

        svg: {
          marginRight: '0.5rem',
        },

        '.MuiSelect-select': {
          paddingTop: '0.25rem !important',
          paddingBottom: '0.25rem !important',
          paddingRight: '1.75rem !important',
          display: 'flex',
          alignItems: 'center',
        },

        '.show-rows-dropdown': {
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
        }
      },
    }
  };
});