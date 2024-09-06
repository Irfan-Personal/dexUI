import styled from '@emotion/styled';

export const RangeSelectorStyle = styled('div')(({ theme }: any) => {
  return {
    background: theme.primary[1],
    borderRadius: '0.5rem',
    padding: '1rem 1rem 0 1rem',

    '.MuiSlider-root': {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      height: '12.5rem',
      padding: '0',
      zIndex: 5,

      '.MuiSlider-track': {
        display: 'none',
      },

      '.MuiSlider-rail': {
        display: 'none',
      },

      '.MuiSlider-thumb': {
        height: '100%',
        background: 'none',
        borderRadius: 'unset',
        width: 'unset',

        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
          boxShadow: 'inherit',
        },

        '.thumb-box': {
          width: '0.75rem',
          height: '1.25rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',

          '.thumb-bar': {
            width: '1px',
            height: '0.75rem',
            marginLeft: '2px',
            background: theme.text.button,
          },
        },

        '&[data-index="0"]': {
          '.thumb-box': {
            borderRadius: '2px 0px 0px 2px',
            background: theme.lightcurve[0],
            transform: 'translateX(-50%)',
          },

          '&:before': {
            content: '""',
            height: '100%',
            borderRadius: 0,
            width: '0.25rem',
            background: theme.lightcurve[0],
          }
        },

        '&[data-index="1"]': {
          '.thumb-box': {
            borderRadius: '0px 2px 2px 0px',
            background: theme.secondary[10],
            transform: 'translateX(50%)',
          },

          '&:before': {
            content: '""',
            height: '100%',
            borderRadius: 0,
            width: '0.25rem',
            background: theme.secondary[10],
          }
        }
      }
    },

    '.range-selector-container': {
      position: 'relative',
      width: '100%',
      height: '12.5rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }
  };
});