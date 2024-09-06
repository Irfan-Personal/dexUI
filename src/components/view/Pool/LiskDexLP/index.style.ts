import styled from '@emotion/styled';

export const LiskDexLPStyle = styled('div')(({ theme }: any) => {
  return {
    position: 'relative',
    borderRadius: '0.5rem',
    boxShadow: theme.shadow.md,
    background: theme.bg.secondary,

    padding: '1.5rem',

    '.lisk-dex-lp-main': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '2.5rem',
      marginBottom: '1rem',

      '.loader-component': {
        svg: {
          path: {
            stroke: theme.lightcurve[0],
          }
        }
      }
    },
  };
});