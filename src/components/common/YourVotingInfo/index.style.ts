import styled from '@emotion/styled';

export const YourVotingInfoComponentStyle = styled('div')(({ theme }: any) => {
  return {
    background: theme.bg.secondary,
    borderRadius: '0.5rem',
    border: `0.5px solid ${theme.border.primary}`,
    boxShadow: theme.shadow.sm,

    '.your-voting-info-header': {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '1.5rem',
      borderBottom: `0.5px solid ${theme.border.primary}`,
    },

    '.your-voting-info-body': {
      padding: '1.5rem',
    },
  };
});
