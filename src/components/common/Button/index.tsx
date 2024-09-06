import { LoaderComponent } from 'components';
import { ButtonComponentStyle } from './index.style';
import { ButtonProps } from '@mui/material';

export interface IButtonProps extends ButtonProps {
  loading?: boolean,
}
export const ButtonComponent: React.FC<IButtonProps> = (props) => {
  const { children, loading, disabled, variant = 'contained', ...buttonProps } = props;

  return (
    <ButtonComponentStyle
      {...buttonProps}
      variant={variant}
      disabled={disabled || loading}
    >
      {
        loading ?
          <LoaderComponent /> :
          children
      }
    </ButtonComponentStyle>
  );
};
