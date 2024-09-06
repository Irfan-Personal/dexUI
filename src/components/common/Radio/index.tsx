import { ChangeEvent, InputHTMLAttributes } from 'react';
import { RadioComponentStyle } from './index.style';

interface IProps {
  checked?: boolean,
  value?: unknown,
  name?: string,
  inputProps?: InputHTMLAttributes<HTMLInputElement>,
  onChange?: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void,
}

export const RadioComponent: React.FC<IProps> = (props) => {
  const { ...radioProps } = props;
  return (
    <RadioComponentStyle
      {...radioProps}
    />
  );
};