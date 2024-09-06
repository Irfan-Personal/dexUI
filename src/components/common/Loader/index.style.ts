import styled from '@emotion/styled';

export const LoaderComponentStyle = styled('div')(() => {
  return {
    display: 'flex',
    alignItems: 'center',
    svg: {
      animation: 'loading 2s linear infinite',
      '@keyframes loading': {
        '0%': {
          transform: 'rotate(0)',
        },
        '100%': {
          transform: 'rotate(360deg)',
        }
      }
    }
  };
});
