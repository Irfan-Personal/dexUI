import Link from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';
import { Box, IconButton, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

import { menuItems } from 'consts';
import { LightcurveIcon } from 'imgs/icons';
import { HeaderStyle } from './index.style';
import { useEffect, useState } from 'react';
import { IPlatformContext } from 'contexts';
import { ISettings } from 'models';
import { SettingsModal, WalletComponent } from 'components';
import { compareUrl } from 'utils';

export interface IHeaderProps {
  platform: IPlatformContext,
}

export const Header: React.FC<IHeaderProps> = (props) => {
  const router = useRouter();
  const { platform } = props;

  const { pathname } = router || { pathname: '' };
  const [openSettingsModal, setOpenSettingsModal] = useState<boolean>(false);
  const [settings, setSettings] = useState<ISettings>();
  const [connected, setConnected] = useState<boolean>(false);

  useEffect(() => {
    setSettings({
      theme: platform.getThemeType(),
      currency: platform.currency,
      splipageTolerance: settings?.splipageTolerance || 0,
      transactionDeadline: settings?.transactionDeadline || 0,
    });
  }, [platform, settings?.splipageTolerance, settings?.transactionDeadline]);

  const onSaveSettings = (_settings: ISettings) => {
    platform.saveCurrency(_settings.currency);
    platform.saveTheme(_settings.theme);
    setSettings({ ..._settings });
  };


  return (
    <HeaderStyle>
      <Container className="header-container" maxWidth="xl">
        <LightcurveIcon className="header-logo" />
        <Box className="header-menu">
          {
            menuItems.map(item => (
              <Link href={item.href} passHref legacyBehavior key={item.href}>
                <Box
                  className={cn({
                    'header-menu-item': true,
                    'active': compareUrl(pathname, item.href),
                  })}
                >
                  <Typography variant="h5">{item.title}</Typography>
                </Box>
              </Link>
            ))
          }
        </Box>

        <Box className="header-actions">
          <WalletComponent onConnected={(_connected) => setConnected(_connected)} />

          {
            connected &&
            <IconButton className="header-menu-list-button" onClick={() => { setOpenSettingsModal(true); }}>
              <FontAwesomeIcon icon={faEllipsis} />
            </IconButton>
          }
        </Box>

        {
          openSettingsModal && settings &&
          <SettingsModal
            settings={settings}
            onClose={() => { setOpenSettingsModal(false); }}
            onSave={onSaveSettings}
          />
        }
      </Container>
    </HeaderStyle>
  );
};
