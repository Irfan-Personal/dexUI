import { Box, MenuItem, Typography } from '@mui/material';
import { ButtonComponent, DropdownComponent } from 'components';
import { LiskIcon } from 'imgs/icons';
import { ellipsisAddress } from 'utils';
import { WalletComponentStyle } from './index.style';
import { useEffect, useState } from 'react';
import { ConnectWalletModal } from './ConnectWalletModal';
import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { WalletModal } from './WalletModal';
import { useChainData, useJsonRpc, useWalletConnectClient } from 'contexts';
import { DEFAULT_MAIN_CHAINS, DEFAULT_TEST_CHAINS } from 'consts';
import { IAccount } from 'models';
import { useDispatch } from 'react-redux';
import { AppActions } from 'store';
import WalletVisual from './WalletVisual';

export interface IWalletComponentProps {
  onConnected: (connected: boolean) => void,
}

export const WalletComponent: React.FC<IWalletComponentProps> = (props) => {
  const { onConnected } = props;

  const dispatch = useDispatch();
  const [openConnectWalletModal, setOpenConnectWalletModal] = useState<boolean>(false);
  const [openWalletModal, setOpenWalletModal] = useState<boolean>(false);
  const [connectClicked, setConnectClicked] = useState<boolean>(false);

  const [uri, setUri] = useState<string>('');
  const [account, setAccount] = useState<IAccount>();

  // Initialize the WalletConnect client.
  const {
    client,
    connect,
    disconnect,
    chains,
    accounts,
    setChains,
  } = useWalletConnectClient();

  // Use `JsonRpcContext` to provide us with relevant RPC methods and states.
  const {
    isTestnet,
  } = useJsonRpc();

  const { chainData } = useChainData();

  const onConnect = (chainId: string) => {
    setChains([chainId]);
    setConnectClicked(true);
  };

  useEffect(() => {
    if (chains && chains.length && connectClicked) {
      setConnectClicked(false);
      if (typeof client === 'undefined') {
        console.log('WalletConnect is not initialized');
      } else {
        connect(undefined, (uri: string) => {
          setUri(uri);
        });
      }
    }
  }, [chains, connectClicked, client, connect]);

  const onCloseConnectWalletModal = () => {
    setOpenConnectWalletModal(false);
    setUri('');
  };

  const onDisconnect = () => {
    disconnect()
      .then(() => {
        setOpenWalletModal(false);
      });
  };

  useEffect(() => {
    if (accounts && accounts.length > 0) {
      const account = accounts[0];
      if (account) {
        setAccount(account);
        dispatch(AppActions.wallet.setAccount(account));
        onConnected(true);
      }
    } else {
      setUri('');
      setAccount(undefined);
      onConnected(false);
      setOpenWalletModal(false);
      dispatch(AppActions.wallet.resetWalletState());
    }
  }, [accounts, dispatch, onConnected]);

  return (
    <WalletComponentStyle>
      {
        (account && account.address) ?
          <>
            <DropdownComponent
              className="header-menu-chain"
              defaultValue={10}
            >
              <MenuItem value={10}><LiskIcon /><Typography variant="h5">Dex Testnet</Typography></MenuItem>
            </DropdownComponent>

            <Box className={
              cn({
                'header-menu-wallet': true,
                'open': openWalletModal,
              })
            }
            onClick={() => setOpenWalletModal(true)}
            >
              <WalletVisual address={account.address} size={24} />
              <Typography variant="h5">{ellipsisAddress(account.address)}</Typography>
              <FontAwesomeIcon icon={faChevronDown} />
            </Box>
          </> :
          <ButtonComponent
            className={
              cn({
                'wallet-connect-button': true,
                'open': openConnectWalletModal,
              })
            }
            onClick={() => {
              setOpenConnectWalletModal(true);
            }}
          >
            <Typography variant="body2">Connect Wallet</Typography>
          </ButtonComponent>
      }
      {
        openConnectWalletModal &&
        <ConnectWalletModal
          chainData={chainData}
          chainOptions={isTestnet ? DEFAULT_TEST_CHAINS : DEFAULT_MAIN_CHAINS}
          uri={uri}
          onClose={onCloseConnectWalletModal}
          connected={!!account}
          onConnect={onConnect}
        />
      }
      {
        openWalletModal &&
        <WalletModal
          onDisconnect={onDisconnect}
          onClose={() => setOpenWalletModal(false)}
          account={account}
        />
      }
    </WalletComponentStyle>
  );
};