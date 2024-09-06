import styled from '@emotion/styled';

export const FeaturedPoolsStyle = styled('div')(({ theme }: any) => {
  return {
    position: 'relative',

    '.feature-pools-container': {
      overflow: 'auto',
      display: 'flex',

      scrollBehavior: 'smooth',
      transition: 'all 1s ease-in-out',

      '&::-webkit-scrollbar': {
        display: 'none',
      },
    },

    '.scroll-button': {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: '2.5rem',
      height: '2.5rem',

      '&.left': {
        left: '-2.5rem',

        [theme.breakpoints.down('md')]: {
          left: '0rem',
        },
      },

      '&.right': {
        right: '-2.5rem',

        [theme.breakpoints.down('md')]: {
          right: '0rem',
        },
      },

      svg: {
        color: theme.lightcurve[0],
      }
    },

    '.pool-box': {
      width: 'fit-content',
      padding: '2px',
      borderRadius: '0.5rem',
      background: 'linear-gradient(90deg, rgba(66, 112, 245, 0.8) 14.06%, rgba(83, 120, 228, 0.8) 36.98%, rgba(231, 36, 176, 0.9) 81.25%)',

      '&:hover': {
        background: '#0C152E',
        '.pool-box-inner': {
          background: theme.lightcurve[60],
        },

        '.token-name': {
          color: theme.text.button,
        },

        '.pool-detail-value': {
          color: theme.text.button,
        }
      },

      '.pool-box-inner': {
        width: '18rem',
        height: '10.5rem',
        boxSizing: 'border-box',
        padding: '1.5rem',
        borderRadius: '0.5rem',
        background: theme.bg.secondary,
      },

      marginRight: '2.5rem',

      '.pool-tokens': {
        display: 'flex',

        '.token2-image': {
          marginLeft: '-0.75rem',
        },

        '.token-name': {
          h4: {
            fontWeight: 500,
          },

          marginLeft: '1.25rem',
        }
      },

      '.pool-detail': {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '2rem',

        '.pool-detail-title': {
          color: theme.text.paragraph,
        }
      }
    }
  };
});