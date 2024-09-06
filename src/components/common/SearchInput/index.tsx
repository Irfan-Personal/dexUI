import { SearchInputComponentStyle } from './index.style';
import { useTheme } from '@mui/styles';
import { InputBase, InputBaseProps, InputLabel } from '@mui/material';
import { ReactNode } from 'react';
import { SearchIcon } from 'imgs/icons';

export interface ISearchInputProps extends InputBaseProps {
  name?: string,
  label?: ReactNode,
  maxLength?: number,
  helper?: ReactNode,
}

export const SearchInputComponent: React.FC<ISearchInputProps> = (props) => {
  const theme: any = useTheme();
  const { maxLength, className, type, label, ...inputProps } = props;

  return (
    <SearchInputComponentStyle
      className={className}
    >
      <InputLabel shrink>
        {label}
      </InputLabel>
      <SearchIcon className="search-icon" />
      <InputBase
        type={type}
        inputProps={{
          sx: {
            '&::placeholder': {
              opacity: 1,
              color: theme.text.placeholder,
            },
            '&::-webkit-outer-spin-button. &::-webkit-inner-spin-button': {
              WebkitAppearance: 'none',
              display: 'none'
            },
          },
          maxLength,
        }}
        {...inputProps}
      />
    </SearchInputComponentStyle >
  );
};
