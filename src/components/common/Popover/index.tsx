import { Box } from '@mui/material';
import { ReactNode } from 'react';
import { PopoverComponentStyle } from './index.style';

interface IProps {
  children?: ReactNode,
  open?: boolean,
  anchorEl?: HTMLButtonElement | null,
  onClose?: () => void,
}

export const PopoverComponent: React.FC<IProps> = (props) => {
  const { children } = props;
  return (
    <PopoverComponentStyle
      anchorOrigin={{
        vertical: 'center',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'center',
        horizontal: 'left',
      }}
      {...props}
    >
      <Box className="popover-container">
        {children}
      </Box>
    </PopoverComponentStyle>
  );
};