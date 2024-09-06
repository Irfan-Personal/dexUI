import styled from '@emotion/styled';

export const TokenComponentStyle = styled('div')(({ theme }: any) => {
  return {
    display: 'flex',
    flexDirection: 'column',
    height: '38.75rem',

    '.token-header': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: theme.text.primary,
      width: '100%',
      padding: '1rem',

      '.token-name': {
        display: 'flex',
        alignItems: 'center',

        svg: {
          color: theme.lightcurve[0],
          marginRight: '0.25rem',
        }
      },

      h4: {
        fontWeight: '500',
      },

      '.MuiIconButton-root': {
        svg: {
          width: '1rem',
          height: '1rem',
        }
      }
    },

    '.token-main': {
      marginTop: '2rem',

      p: {
        color: theme.text.paragraph,
        textAlign: 'center',
      },

      h2: {
        fontWeight: 500,
        marginTop: '0.125rem',
        textAlign: 'center',
      },

      '.token-image': {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '1rem',
      }
    }
  };
});
