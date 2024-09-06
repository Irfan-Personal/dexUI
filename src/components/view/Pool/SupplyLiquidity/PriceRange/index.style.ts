import styled from '@emotion/styled';

export const PriceRangeStyle = styled('div')(({ theme }: any) => {
  return {
    padding: '0.75rem 1rem',
    border: `1px solid ${theme.border.primary}`,
    borderRadius: '0.25rem',
    width: '12.25rem',

    [theme.breakpoints.down('sm')]: {
      width: '10.25rem',
    },

    p: {
      textAlign: 'center',
    },

    '.price-range-value-label': {
      fontSize: '0.75rem',
    },

    '.price-range-value': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: '0.75rem',
      marginBottom: '0.75rem',

      '.MuiIconButton-root': {
        width: '1.75rem',
        height: '1.75rem',
        padding: '0.25rem',
        borderRadius: '0.25rem',
        background: theme.primary[2.5],

        svg: {
          color: theme.lightcurve[0],
        }
      }
    }
  };
});