import styled from '@emotion/styled';

export const PoolItemStyle = styled('div')(({ theme }: any) => {
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',

    '.pool-item-left': {
      display: 'flex',
      alignItems: 'center',
      color: theme.primary[0],
      lineHeight: '2rem',

      '.pool-item-token1': {
        width: '2rem',
        height: '2rem',
      },

      '.pool-item-token2': {
        width: '2rem',
        height: '2rem',
        marginLeft: '-1rem !important',
        marginRight: '0.75rem',
      },

      '.pool-item-rate': {
        marginLeft: '0.75rem',
        padding: '0.25rem 0.5rem',
        borderRadius: '0.25rem',
        background: theme.primary[40],
        p: {
          fontSize: '0.75rem',
        }
      }
    }
  };
});
