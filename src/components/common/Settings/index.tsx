import Image from 'next/image';
import { Box, IconButton, MenuItem, SelectChangeEvent, Typography } from '@mui/material';
import { ButtonComponent, DropdownComponent, TransactionSettings, SwitchComponent } from 'components';
import { CancelIcon } from 'imgs/icons';
import { SettingsModalStyle } from './index.style';
import { mockFiatCurrnecies } from '__mock__';
import { useTheme } from '@mui/styles';
import { useState } from 'react';
import { ThemeType } from 'consts';
import { ISettings } from 'models';

export interface ISettingsModalProps {
  settings: ISettings,
  onSave: (settings: ISettings) => void,
  onClose?: () => void,
}

export const SettingsModal: React.FC<ISettingsModalProps> = (props) => {
  const { settings, onSave, onClose } = props;
  const theme: any = useTheme();

  const [themeType, setThemeType] = useState<ThemeType>(settings.theme);
  const [currency, setCurrency] = useState<string>(settings.currency);
  const [splipageTolerance, setSpliageTolerance] = useState<number>(settings.splipageTolerance);
  const [transactionDeadline, setTransactionDeadline] = useState<number>(settings.transactionDeadline);

  const onSaveSettings = () => {
    onSave({
      currency,
      theme: themeType,
      splipageTolerance,
      transactionDeadline,
    });
    onClose && onClose();
  };

  const onChangeCurrency = (event: SelectChangeEvent<any>) => {
    setCurrency(event.target.value as string);
  };

  return (
    <SettingsModalStyle>
      <Box className="settings-background"></Box>
      <Box className="settings-modal-container">
        <Box className="settings-modal-header">
          <Typography variant="h4">Settings</Typography>

          <IconButton onClick={() => { onClose && onClose(); }}>
            <CancelIcon />
          </IconButton>
        </Box>

        <Box className="settings-modal-body">
          <Box className="settings-dark-mode">
            <Box>
              <Typography className="title" variant="body1">Dark Mode</Typography>
              <Typography className="description" variant="body2">Toggle between dark and light mode</Typography>
            </Box>
            <SwitchComponent
              checked={themeType === ThemeType.Dark}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setThemeType((event.target.checked ? ThemeType.Dark : ThemeType.Light)); }}
            />
          </Box>

          <Box className="settings-currency">
            <Box>
              <Typography className="title" variant="body1">Currency</Typography>
              <Typography className="description" variant="body2">Select the fiat currency on display</Typography>
            </Box>
            <DropdownComponent
              className="currency-dropdown"
              value={currency}
              onChange={onChangeCurrency}
              renderValue={(value) => {
                const item = mockFiatCurrnecies.find(el => el.symbol === value);
                return (
                  <Box sx={{
                    display: 'flex',
                  }}>
                    <Image src={item?.image} width={24} height={17} />
                    <Typography variant="body1" sx={{ marginLeft: '0.75rem' }}>{item?.symbol}</Typography>
                  </Box>
                );
              }}
            >
              {
                mockFiatCurrnecies.map(el => (
                  <MenuItem key={el.symbol} value={el.symbol} sx={{
                    display: 'flex',
                  }}>
                    <Image src={el.image} width={24} height={17} />
                    <Typography variant="body1" sx={{ marginLeft: '0.75rem' }}>{el.symbol}</Typography>
                    <Typography variant="body2" sx={{ marginLeft: '0.75rem', color: theme.text.paragraph }}>{el.name}</Typography>
                  </MenuItem>
                ))
              }
            </DropdownComponent>
          </Box>
          <TransactionSettings
            splipageTolerance={splipageTolerance as number}
            transactionDeadline={transactionDeadline as number}
            onChangeSplipageTolerance={(value) => setSpliageTolerance(value)}
            onChangeTransactionDeadline={(value) => setTransactionDeadline(value)}
          />
        </Box>

        <Box className="settings-modal-footer">
          <ButtonComponent
            data-testid="settings-modal-cancel-test"
            className="settings-modal-cancel"
            variant="outlined"
            onClick={() => { onClose && onClose(); }}
          >
            <Typography variant="body1">Cancel</Typography>
          </ButtonComponent>
          <ButtonComponent
            data-testid="settings-modal-confirm-test"
            className="settings-modal-confirm"
            onClick={onSaveSettings}
          >
            <Typography variant="body1">Save</Typography>
          </ButtonComponent>
        </Box>
      </Box>
    </SettingsModalStyle>
  );
};
