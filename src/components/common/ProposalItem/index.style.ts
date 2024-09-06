import styled from '@emotion/styled';

export const ProposalItemStyle = styled('div')(({ theme }: any) => {
  return {
    position: 'relative',
    padding: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    border: `1px solid ${theme.primary[10]}`,
    borderRadius: '0.75rem',
    background: theme.bg.proposalItem,
    cursor: 'pointer',

    [theme.breakpoints.down('md')]: {
      padding: '1.5rem 0.75rem 1.5rem 1.5rem',
    },

    '.proposal-item-main': {
      width: '100%',
      '.proposal-item-header': {
        position: 'relative',
        width: '100%',
        marginBottom: '0.5rem',

        '.proposal-item-no': {
          display: 'flex',
          alignItems: 'center',

          '.proposal-type-badge': {
            marginLeft: '0.75rem',
          },
        },

        '.proposal-item-status': {
          position: 'relative',
          display: 'flex',
          alignItems: 'center',

          p: {
            marginLeft: '0.25rem',

            '&:before': {
              position: 'absolute',
              left: '-0.625rem',
              top: '50%',
              transform: 'translateY(-50%)',
              content: '" "',
              width: '0.5rem',
              height: '0.5rem',
              background: theme.info.primary,
              borderRadius: '100%',
            }
          }
        }
      },

      '.proposal-item-period': {
        marginTop: '0.25rem',
        display: 'flex',

        svg: {
          marginRight: '0.25rem',
        },

        p: {
          color: theme.text.body,
          span: {
            color: theme.success.light,
          }
        }
      }
    },

    '.proposal-item-arrow': {
      marginLeft: '4rem',
      marginRight: '0.75rem',

      [theme.breakpoints.down('md')]: {
        position: 'absolute',
        right: '0.75rem',
      },
    }
  };
});
