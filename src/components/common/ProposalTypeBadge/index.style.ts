import styled from '@emotion/styled';

export const ProposalTypeBadgeStyle = styled('div')(({ theme }: any) => {
  return {
    display: 'flex',
    alignItems: 'center',
    height: '1.25rem',
    borderRadius: '0.75rem',
    border: `0.75px solid ${theme.lightcurve[0]}`,
    padding: '0.25rem 0.625rem',

    svg: {
      width: '0.75rem',
      height: '0.75rem',
    },

    h6: {
      marginLeft: '0.375rem',
      fontSize: '0.75rem',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
    }
  };
});
