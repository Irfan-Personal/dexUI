import styled from '@emotion/styled';

export const PaginationComponentStyle = styled('div')(({ theme }: any) => {
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'end',
    marginTop: '1rem',

    '.MuiIconButton-root': {
      marginLeft: '0.5rem',
      color: theme.lightcurve[0],

      svg: {
        width: '1rem',
        height: '1rem',
      },

      '&.Mui-disabled': {
        color: theme.primary[20],
      }
    },

    '.row-count-dropdown': {
      width: '10rem',
      height: '2rem',

      svg: {
        marginRight: '0.5rem',
      },

      '.MuiSelect-select': {
        paddingTop: '0.25rem !important',
        paddingBottom: '0.25rem !important',
        paddingRight: '1.75rem !important',
        display: 'flex',
        alignItems: 'center',
      },

      '.show-rows-dropdown': {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
      }
    },
  };
});
