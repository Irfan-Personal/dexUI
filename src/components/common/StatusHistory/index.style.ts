import styled from '@emotion/styled';

export const StatusHistoryComponentStyle = styled('div')(({ theme }: any) => {
  return {
    background: theme.bg.secondary,
    borderRadius: '0.5rem',
    border: `0.5px solid ${theme.border.primary}`,
    boxShadow: theme.shadow.sm,

    '.status-history-header': {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '1.5rem',
      borderBottom: `0.5px solid ${theme.border.primary}`,
    },

    '.status-history-body': {
      padding: '2rem 1.5rem 0 1.5rem',

      '.MuiTimeline-root': {
        padding: 0,
        margin: 0,
        marginTop: '0.375rem',
        '.MuiTimelineItem-root': {
          marginTop: '-0.375rem',

          '.MuiTimelineDot-root': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '1.25rem',
            height: '1.25rem',
            background: '#FBFBFF',
            border: '2px solid #EDEDED',
            boxShadow: 'none',

            svg: {
              width: '1.25rem',
              height: '1.25rem',
              color: theme.lightcurve[0],
            },

            '&.pending': {
              border: `2px solid ${theme.lightcurve[0]}`,
              padding: '0.25rem !important',
              '&:after': {
                content: '""',
                margin: 0,
                padding: 0,
                width: '100%',
                height: '100%',
                borderRadius: '100%',
                background: theme.lightcurve[0],
              }
            }
          },

          '.MuiTimelineConnector-root': {
            background: '#EDEDED',
            width: '2px',
            height: '3.25rem',
            marginTop: '-0.375rem',
            borderRadius: '2px',

            '&.success': {
              background: theme.lightcurve[0],
            }
          },

          '.MuiTimelineContent-root': {
            padding: 0,
            marginLeft: '1.5rem',
            height: 'fit-content',
          }
        }
      }
    }
  };
});
