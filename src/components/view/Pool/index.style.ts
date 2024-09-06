import styled from '@emotion/styled';

export const PoolViewStyle = styled('div')(({ theme }: any) => {
  return {
    display: 'flex',
    justifyContent: 'center',

    marginTop: '13.25rem',
    marginBottom: '6rem',
    padding: '0 11rem',

    [theme.breakpoints.down('md')]: {
      marginTop: '6.5rem',
      padding: '0 1rem',
    },
  };
});