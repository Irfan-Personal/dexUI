import { ReactNode } from 'react';
import { UrlInputComponentStyle } from './index.style';
import { useTheme } from '@mui/styles';
import { Box, InputBase, InputBaseProps, InputLabel, Typography } from '@mui/material';
import { UseFormRegister, RegisterOptions, UseFormWatch } from 'react-hook-form';
import { LinkIcon } from 'imgs/icons';
import cn from 'classnames';
import { isValidURL } from 'utils';

export interface IUrlInputProps extends InputBaseProps {
  name?: string,
  label?: ReactNode,
  maxLength?: number,
  register?: UseFormRegister<any>,
  watch?: UseFormWatch<any>,
  options?: RegisterOptions,
}

export const UrlInputComponent: React.FC<IUrlInputProps> = (props) => {
  const theme: any = useTheme();
  const {
    maxLength,
    register,
    watch,
    options,
    className,
    name: fieldName,
    type,
    label,
    ...inputProps
  } = props;
  const value = watch && fieldName && watch(fieldName);

  const onClickLink = () => {
    if (isValidURL(value))
      window.location.href = value;
  };
  return (
    <UrlInputComponentStyle
      className={className}
    >
      <InputLabel shrink>
        {label}
      </InputLabel>
      <InputBase
        type={type}
        inputProps={{
          sx: {
            '&::placeholder': {
              opacity: 1,
              color: theme.text.placeholder,
            },
            color: theme.lightcurve[0],
            textDecoration: value ? 'underline' : 'unset',
          },
          maxLength,
        }}
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        {...(register && register(fieldName!, options))}
        {...inputProps}
      />
      <LinkIcon className={
        cn(
          {
            'link-icon': true,
            'active': !!value,
          })}
      onClick={onClickLink}
      />
      {
        !!value && maxLength &&
        <Box className="input-length-counter">
          <Typography variant="caption">{value.length}/{maxLength}</Typography>
        </Box>
      }
    </UrlInputComponentStyle >
  );
};
