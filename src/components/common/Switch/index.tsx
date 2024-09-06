import { SwitchComponentStyle } from './index.style';

interface IProps {
  className?: string,
  checked?: boolean,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

export const SwitchComponent: React.FC<IProps> = (props) => {
  return (
    <SwitchComponentStyle
      {...props}
    />
  );
};
