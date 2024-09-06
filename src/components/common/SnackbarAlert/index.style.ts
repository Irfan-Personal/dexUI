import { SnackbarContent } from 'notistack';
import styled from '@emotion/styled';

export const SnackbarAlertComponentStyle = styled(SnackbarContent)(({ theme }: any) => {
  return {
    position: 'relative',
    padding: '1rem 0rem 1rem 1rem',
    background: theme.primary[2.5],
    width: '28rem',
    borderRadius: '0.25rem',

    [theme.breakpoints.down('sm')]: {
      width: 'unset',
    },

    '.alert-component-main': {
      display: 'flex',

      '.alert-component-icon': {
        display: 'flex',
        alignItems: 'center',
        width: '1.25rem',

        svg: {
          width: '1.25rem',
          height: '1.25rem',
        }
      }
    },

    '.alert-component-content': {
      marginLeft: '1rem',
      paddingRight: '6rem',

      '.alert-component-description': {
        marginTop: '0.25rem',
      },

      '.alert-component-link': {
        cursor: 'pointer',
        marginTop: '1.5rem',
        color: theme.lightcurve[0],
        textDecoration: 'underline',
      }
    },

    '.alert-component-cancel': {
      position: 'absolute',
      top: '0.5rem',
      right: '0.5rem',
      cursor: 'pointer',

      svg: {
        path: {
          stroke: theme.opacities[20],
        }
      }
    }
  };
});
