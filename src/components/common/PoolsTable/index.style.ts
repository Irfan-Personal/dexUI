import styled from '@emotion/styled';

export const PoolsTableStyle = styled('div')(({ theme }: any) => {
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

    '.pools-table': {
      marginTop: '1.5rem',

      [theme.breakpoints.down('md')]: {
        '.MuiTableCell-root': {
          display: 'none',

          '&.always-visible': {
            display: 'table-cell',
          }
        },
      },

      thead: {
        p: {
          color: theme.text.paragraph,
        },

        '.sort-key-table-cell': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'end',
          cursor: 'pointer',

          '&:hover': {
            p: {
              color: theme.text.primary,
            },
            svg: {
              path: {
                fill: theme.text.primary,
              },
            },
          },

          svg: {
            width: '0.5rem',
            height: '0.75rem',
            marginLeft: '0.25rem',
            path: {
              fill: theme.text.paragraph,
            },
          },
        },

        '.apy-th': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'end',

          svg: {
            marginLeft: '0.25rem',
            path: {
              stroke: theme.text.paragraph,
            }
          }
        }
      },

      tbody: {
        tr: {
          '&:hover': {
            background: theme.primary[2.5],
            cursor: 'pointer',
          },

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
          },

          '.token-share': {
            background: theme.primary[40],
            borderRadius: '0.25rem',
            color: theme.primary[0],
            marginLeft: '0.75rem',
            padding: '0.25rem 0.5rem',
          }
        },

        '.apy-td': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'end',
          color: theme.success.dark,

          svg: {
            marginLeft: '0.25rem',
          },
        },

        '.actions-td': {
          display: 'flex',
          justifyContent: 'end',

          '.MuiButtonBase-root': {
            width: 'fit-content',
            padding: '0.25rem 0.5rem',
            marginLeft: '0.75rem',

            '&.MuiButton-outlined': {
              borderColor: theme.lightcurve[0],
              color: theme.lightcurve[0],
            }
          }
        }
      }
    },
  };
});