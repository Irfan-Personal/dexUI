import { Box, IconButton, Typography } from '@mui/material';
import { AlertVariant } from 'consts';
import { CancelIcon, InfoIcon, SuccessIcon, FailureIcon } from 'imgs/icons';
import Link from 'next/link';
import { SnackbarAlertComponentStyle } from './index.style';
import { forwardRef } from 'react';
import { CustomContentProps, useSnackbar } from 'notistack';

export interface ISnackbarAlertComponentProps extends CustomContentProps {
  type?: AlertVariant,
  subject?: string,
  link?: string,
}

// eslint-disable-next-line react/display-name
export const SnackbarAlertComponent = forwardRef<HTMLDivElement, ISnackbarAlertComponentProps>(
  (props, ref) => {
    const { id, type, subject, message, link } = props;
    const { closeSnackbar } = useSnackbar();

    const onClose = () => {
      closeSnackbar(id);
    };

    return (
      <SnackbarAlertComponentStyle ref={ref}>
        <IconButton className="alert-component-cancel" onClick={() => { onClose(); }}>
          <CancelIcon />
        </IconButton>
        <Box className="alert-component-main">
          <Box className="alert-component-icon">
            {
              type && {
                [AlertVariant.success]: <SuccessIcon />,
                [AlertVariant.info]: <InfoIcon />,
                [AlertVariant.fail]: <FailureIcon />,
              }[type]
            }
          </Box>
          <Box className="alert-component-content">
            {subject && <Typography className="alert-component-subject" variant="body1">{subject}</Typography>}
            <Typography className="alert-component-description" variant="body2">{message}</Typography>
            {link && <Link href={link}><Typography className="alert-component-link" variant="body2">View on Liskscan</Typography></Link>}
          </Box>
        </Box>
      </SnackbarAlertComponentStyle>
    );
  }
);