import { FormLabel, Select, SelectProps } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactNode, useState } from 'react';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { DropdownComponentStyle } from './index.style';
import { useTheme } from '@mui/styles';
import { RegisterOptions, UseFormRegister } from 'react-hook-form';

export interface IDropdownComponentProps extends SelectProps {
  name?: string,
  label?: ReactNode,
  register?: UseFormRegister<any>,
  options?: RegisterOptions,
}

export const DropdownComponent: React.FC<IDropdownComponentProps> = (props) => {
  const { className, label, children, register, name: fieldName, options, ...selectProps } = props;
  const [isOpen, setOpen] = useState<boolean>(false);

  const theme: any = useTheme();
  return (
    <DropdownComponentStyle
      className={className}
    >
      {
        !!label && <FormLabel>{label}</FormLabel>
      }
      <Select
        data-testid="dropdown-select"
        displayEmpty
        IconComponent={() => (<FontAwesomeIcon className="dropdown-arrow" icon={isOpen ? faChevronUp : faChevronDown} />)}
        onOpen={() => { setOpen(true); }}
        onClose={() => { setOpen(false); }}
        MenuProps={{
          PaperProps: {
            style: {
              background: theme.bg.secondary,
            }
          }
        }}
        {...selectProps}
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        {...(register && register(fieldName!, options))}
      >
        {children}
      </Select>
    </DropdownComponentStyle>
  );
};
