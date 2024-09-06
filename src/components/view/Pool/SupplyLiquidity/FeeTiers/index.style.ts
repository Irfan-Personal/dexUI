import styled from '@emotion/styled';

export const FeeTiersStyle = styled('div')(({ theme }: any) => {
  return {
    '.fee-tier': {
      position: 'relative',
      border: `0.75px solid ${theme.border.primary}`,
      borderRadius: '0.25rem',
      padding: '0.5rem',
      cursor: 'pointer',
      animationDuration: '1s',

      '&.selected': {
        border: `0.75px solid ${theme.lightcurve[0]}`,
        background: theme.primary[2.5],
      },

      '.fee-tier-description': {
        marginTop: '0.5rem',
        fontSize: '0.75rem',
      },

      '.MuiRadio-root': {
        position: 'absolute',
        top: '0.5rem',
        right: '0.5rem',
        width: '0.75rem',
        height: '0.75rem',

        svg: {
          width: '0.75rem',
          height: '0.75rem',
        }
      }
    }
  };
});