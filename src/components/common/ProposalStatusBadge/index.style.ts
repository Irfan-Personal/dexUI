import styled from '@emotion/styled';

export const ProposalStatusBadgeStyle = styled('div')(({ theme }: any) => {
  return {
    display: 'flex',
    alignItems: 'center',
    height: '1.25rem',
    borderRadius: '0.75rem',
    border: `0.75px solid ${theme.lightcurve[20]}`,
    padding: '0.25rem 0.625rem',
    background: theme.primary[10],
    width: 'fit-content',

    h6: {
      fontSize: '0.75rem',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
    }
  };
});
