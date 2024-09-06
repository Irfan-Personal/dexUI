import styled from '@emotion/styled';

export const SearchComponentStyle = styled('div')(({ theme }: any) => {
  return {

    '&.filtered': {
      top: '-1.5rem',
      right: '-1.5rem',
      position: 'absolute',
      padding: '1.5rem',
      borderRadius: '0.25rem',
      background: theme.bg.secondary,
      zIndex: 20,
    },

    '.search-input': {
      width: '20.25rem',
      background: theme.primary[2.5],

      '.MuiInputBase-root': {
        border: 'none',
      },

      input: {
        marginLeft: '0.25rem',
      },

      '.cancel-icon': {
        cursor: 'pointer',
      }
    },

    '.search-label': {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '1.5rem',
      marginBottom: '1rem',

      '.label-tvl': {
        color: theme.text.paragraph,
      }
    },

    '.search-pool-item': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '0.25rem',

      '.search-pool-name': {
        display: 'flex',

        '.pool-images': {
          display: 'flex',

          '.pool-image-2': {
            marginLeft: '-0.75rem',
          }
        },

        '.pool-token-names': {
          marginLeft: '0.75rem',

          p: {
            fontSize: '0.75rem',
            color: theme.text.paragraph,
          }
        },
      },

      '.search-pool-value': {
        p: {
          fontSize: '0.75rem',
          color: theme.error.dark,
          textAlign: 'right',

          '&.increasement': {
            color: theme.success.dark,
          }
        },

        svg: {
          marginLeft: '0.25rem',
        }
      },
    },

    '.view-more': {
      marginTop: '0.75rem',
      color: theme.lightcurve[0],
      cursor: 'pointer',
    }
  };
});