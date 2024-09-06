import { Typography } from '@mui/material';
import { useTheme } from '@mui/styles';
import { DarkEmptyIcon, LightEmptyIcon } from 'imgs/icons';

import { EmptyComponentStyle } from './index.style';

interface IProps {
  className?: string,
  subject: string;
  description: string;
}

export const EmptyComponent: React.FC<IProps> = (props) => {
  const { className, subject, description } = props;
  const theme: any = useTheme();
  return (
    <EmptyComponentStyle className={className}>
      {theme?.palette.mode === 'light' ? <LightEmptyIcon /> : <DarkEmptyIcon />}
      <Typography className="empty-subject" variant="subtitle2">{subject}</Typography>
      <Typography className="empty-description" variant="body2">{description}</Typography>
    </EmptyComponentStyle>
  );
};
