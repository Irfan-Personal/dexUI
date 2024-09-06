import styled from '@emotion/styled';

export const SupplyLiquidityStyle = styled('div')(({ theme }: any) => {
  return {
    position: 'relative',
    borderRadius: '0.5rem',
    boxShadow: theme.shadow.md,
    background: theme.bg.secondary,

    padding: '1.5rem',

    '.supply-liquidity-title': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '0.5rem',

      '.supply-liquidity-actions': {
        display: 'flex',
        alignItems: 'center',
        color: theme.lightcurve[0],

        p: {
          cursor: 'pointer',
          marginRight: '1rem',
        }
      }
    },

    '.supply-liquidity-select-pair': {
      marginTop: '2.5rem',
      marginBottom: '1.5rem',

      '.supply-liquidity-token-selection': {
        display: 'flex',
        alignItems: 'center',
        marginTop: '1rem',

        [theme.breakpoints.down('md')]: {
          flexDirection: 'column',

          '.plus-icon': {
            margin: '1rem 0',
          }
        },

        '.plus-icon': {
          color: theme.lightcurve[0],
          width: '1.5rem',
          height: '1.5rem',
          marginLeft: '0.75rem',
          marginRight: '0.75rem',
        },

        '.select-token': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'linear-gradient(180deg, #513AE2 0%, rgba(64, 45, 183, 0.9) 100%);',
          borderRadius: '0.5rem',
          color: theme.text.button,
          padding: '0.5rem 0.75rem',
          width: '100%',
          cursor: 'pointer',

          svg: {
            width: '1rem',
            height: '0.5rem',
          },

          '&.selected': {
            background: theme.primary[2.5],
            padding: '0.375rem 0.75rem',

            div: {
              display: 'flex',
              alignItems: 'center',

              h6: {
                marginLeft: '0.5rem',
                color: theme.text.primary,
              },
            },

            svg: {
              color: theme.text.primary,
            }
          }
        }
      }
    },

    '.supply-liquidity-initial-price': {
      width: '100%',
      marginBottom: '1.5rem',
    },

    '.supply-liquidity-select-fee-tier': {
      marginBottom: '1.5rem',
      '.fee-tiers': {
        marginTop: '1rem',
      }
    },

    '.supply-liquidity-set-price-range': {
      marginTop: '1.5rem',
      marginBottom: '1.5rem',

      '.set-price-range-title': {
        display: 'flex',
        justifyContent: 'space-between',

        '.full-range': {
          cursor: 'pointer',
          color: theme.lightcurve[0],
        }
      },

      '.set-price-range': {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '1rem',
      }
    },

    '.deposit-amounts': {
      marginBottom: '2rem',
      '.deposit-amount': {
        marginTop: '1rem',
      }
    },

    '.supply-liquidity-mask': {
      position: 'absolute',
      top: '14.5rem',
      background: theme.bg.secondary,
      width: 'calc(100% - 2rem)',
      opacity: 0.5,
      height: '54.5rem',

      [theme.breakpoints.down('md')]: {
        top: '20rem',
      }
    }
  };
});