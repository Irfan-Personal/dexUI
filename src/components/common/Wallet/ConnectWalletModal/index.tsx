import cn from 'classnames';
import { Box, IconButton, Link, Typography } from '@mui/material';
import { CancelIcon, CopyIcon, LiskIcon } from 'imgs/icons';
import { ConnectWalletModalStyle } from './index.style';
import QRCode from 'react-qr-code';
import { LoaderComponent } from 'components/common/Loader';
import { useEffect, useState } from 'react';
import { CheckCircleIcon } from 'imgs/icons/CheckCircleIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { ChainData, ChainMetadata, ChainNamespaces } from 'models';
import { getChainMetadata } from 'chains';

export interface IConnectWalletModalProps {
  chainData: ChainNamespaces,
  uri: string,
  chainOptions: string[],
  connected: boolean,
  onConnect: (chainId: string) => void,
  onClose: () => void,
}
interface BlockchainDisplayData {
  data: ChainData;
  meta: ChainMetadata;
}

function getBlockchainDisplayData(
  chainId: string,
  chainData: ChainNamespaces,
): BlockchainDisplayData | undefined {
  const [namespace, reference] = chainId.split(':');
  let meta: ChainMetadata;
  try {
    meta = getChainMetadata(chainId);
  } catch (e) {
    return undefined;
  }
  const data: ChainData = chainData[namespace][reference];
  if (typeof data === 'undefined') return undefined;
  return { data, meta };
}

export const ConnectWalletModal: React.FC<IConnectWalletModalProps> = (props) => {
  const { chainData, uri, chainOptions, connected, onConnect, onClose } = props;

  const [connecting, setConnecting] = useState<boolean>(true);
  const [error] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const onClickCopy = () => {
    if (uri) {
      navigator.clipboard.writeText(uri);
      setCopied(true);
    }
  };

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    }
  }, [copied]);

  useEffect(() => {
    setConnecting(!connected);
  }, [connected]);

  useEffect(() => {
    if (connected) {
      setTimeout(() => {
        onClose();
      }, 3000);
    }
  }, [connected, onClose]);

  return (
    <ConnectWalletModalStyle>
      <Box className="connect-wallet-modal-background" onClick={onClose} />
      <Box className={
        cn({
          'connect-wallet-modal-container': true,
          request: !!uri
        })
      }>
        <Box className="select-wallet-header">
          {
            uri ?
              <>
                <Box className="lisk-dex-icon">
                  <LiskIcon />
                </Box>
                <Typography variant="h4">Hello there !</Typography>
                <Typography variant="body2">Scan the QR code or copy the request string and paste it into your wallet to connect your account</Typography>

                <IconButton onClick={onClose}>
                  <CancelIcon />
                </IconButton>
              </>
              :
              <>
                <Typography variant="h4">Select a wallet</Typography>
                <Typography variant="body2">By connecting a wallet, you agree
                  to Lisk DEX’s <Link href='https://lisk.com/policies/privacy' target='_blank'>Privacy Policy</Link>.</Typography>
              </>
          }
        </Box>

        <Box className="select-wallet-body">
          {
            uri ?
              <Box>
                <QRCode className="request-qr-code" value={uri} />
                <Typography variant="body2">or</Typography>
                {
                  copied ?
                    <Typography className="request-copied" variant="body2">Copied request</Typography> :
                    <Box
                      className="request-copy"
                      onClick={onClickCopy}
                    >
                      <CopyIcon />
                      <Typography variant="body2">Copy request</Typography>
                    </Box>
                }
              </Box> :
              <>
                {
                  chainOptions.map(chainId => {
                    const chain = getBlockchainDisplayData(chainId, chainData);
                    return (
                      <Box
                        key={chainId}
                        data-testid={'button-connect-test'}
                        className="network-item"
                        onClick={() => onConnect(chainId)}
                      >
                        <Box className="lisk-dex">
                          <Box className="lisk-dex-icon">
                            <LiskIcon />
                          </Box>
                          <Typography variant="h4">{chain?.meta.name || chain?.data.name}</Typography>
                        </Box>

                        <Typography variant="body2">Connect</Typography>
                      </Box>
                    );
                  })
                }
                <Box className="close-button">
                  <Typography variant="body1" data-testid="button-close-test" onClick={onClose}>Close</Typography>
                </Box>
              </>
          }
        </Box>

        {
          uri &&
          <Box
            className={
              cn({
                'select-wallet-footer': true,
                'connecting': connecting,
                'connected': connected,
                'error': error,
              })
            }
          >
            {
              connecting &&
              <>
                <LoaderComponent />
                <Typography variant="body2">Awaiting for connection...</Typography>
              </>
            }
            {
              connected &&
              <>
                <CheckCircleIcon />
                <Typography variant="body2">Connected</Typography>
              </>
            }
            {
              error &&
              <>
                <FontAwesomeIcon icon={faCircleXmark} />
                <Typography variant="body2">Failed to connect</Typography>
              </>
            }
          </Box>
        }
      </Box>
    </ConnectWalletModalStyle >
  );
};