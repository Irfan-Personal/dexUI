import styled from '@emotion/styled';

export const VotesComponentStyle = styled('div')(({ theme }: any) => {
  return {
    background: theme.bg.secondary,
    borderRadius: '0.5rem',
    border: `0.5px solid ${theme.border.primary}`,
    boxShadow: theme.shadow.sm,

    '.votes-header': {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '1.5rem',
      borderBottom: `0.5px solid ${theme.border.primary}`,
    },

    '.votes-body': {
      padding: '1.5rem',

      '.votes-view-more': {
        cursor: 'pointer',
        marginTop: '1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.lightcurve[0],

        svg: {
          marginLeft: '0.75rem',
          width: '0.5rem',
        }
      }
    },
  };
});
