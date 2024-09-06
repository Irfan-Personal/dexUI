import { useContext, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';
import { Box, IconButton, MenuItem, Tab, Tabs, Typography } from '@mui/material';
import { WalletModalStyle } from './index.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket, faChevronRight, faClockRotateLeft, faEllipsisVertical, faUpRightFromSquare, faWallet } from '@fortawesome/free-solid-svg-icons';
import { HistoryComponent } from './History';
import { IAccount, IToken, ITokenBalance } from 'models';
import { TokenComponent } from './Token';
import { currencyDecimalFormat, ellipsisAddress, getDisplayTokenAmount } from 'utils';
import { CheckCircleIcon, CopyIcon } from 'imgs/icons';
import { AppActions, RootState } from 'store';
import WalletVisual from '../WalletVisual';
import { PlatformContext } from 'contexts';
import { currencySymbols } from 'consts';

enum TABS {
  WALLET = 0,
  HISTORY = 1,
}

export interface IWalletModalProps {
  account?: IAccount,
  onClose: () => void,
  onDisconnect: () => void,
}

export const WalletModal: React.FC<IWalletModalProps> = (props) => {
  const dispatch = useDispatch();
  const { account, onClose, onDisconnect } = props;
  const { currency } = useContext(PlatformContext);
  const [tab, setTab] = useState<TABS>(TABS.WALLET);
  const [token, setToken] = useState<IToken | null>(null);
  const [addressCopied, setAddressCopied] = useState<boolean>(false);
  const [menuAddressCopied, setMenuAddressCopied] = useState<boolean>(false);
  const [openWalletMenu, setOpenWalletMenu] = useState<boolean>(false);
  const [address, setAddress] = useState<string>('');
  const { tokenBalances, accountTokens, conversionRates } = useSelector((root: RootState) => root.token);

  const onChangeTab = (event: React.SyntheticEvent, value: number) => {
    setTab(value);
  };

  const onCopyAddress = () => {
    if (address) {
      navigator.clipboard.writeText(address);
      setAddressCopied(true);
    }
  };

  const onMenuCopyAddress = () => {
    if (address) {
      navigator.clipboard.writeText(address);
      setMenuAddressCopied(true);
    }
  };

  useEffect(() => {
    if (account && account.address) {
      setAddress(account.address);
      dispatch(AppActions.token.getTokenBalances({
        address: account.address,
      }));
      dispatch(AppActions.token.getAccountTokens({}));
      dispatch(AppActions.token.getMarketPrices());
    }
  }, [account, dispatch]);

  useEffect(() => {
    if (addressCopied) {
      setTimeout(() => {
        setAddressCopied(false);
      }, 3000);
    }
  }, [addressCopied]);

  useEffect(() => {
    if (menuAddressCopied) {
      setTimeout(() => {
        setMenuAddressCopied(false);
      }, 3000);
    }
  }, [menuAddressCopied]);

  const onViewLiskscan = () => {
    window.open(`https://liskscan.com/account/${address}`, '_blank');
  };

  const getTokenDetail = (tokenID: string) => {
    return accountTokens.find((el: IToken) => el.tokenID === tokenID);
  };

  const balance = useMemo(() => {
    if (tokenBalances.length && accountTokens.length) {
      const balance = tokenBalances.reduce((totalBalance: number, tokenBalance: ITokenBalance) => {
        const token = getTokenDetail(tokenBalance.tokenID) || accountTokens[0];
        totalBalance += +getDisplayTokenAmount(+tokenBalance.availableBalance, token) * (conversionRates[token.symbol][currency] || 0);
        return totalBalance;
      }, 0);
      return balance;
    }
    return 0;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [conversionRates, tokenBalances, accountTokens, currency]);

  return (
    <WalletModalStyle>
      <Box className="wallet-modal-background" onClick={onClose} />
      <Box className={
        cn({
          'wallet-modal-container': true,
        })
      }>
        {
          {
            [TABS.WALLET]: <>{
              token ? <TokenComponent
                token={token}
                tokenBalance={getDisplayTokenAmount(+(tokenBalances.find(el => el.tokenID === token.tokenID)?.availableBalance || 0), token)}
                fiatBalance={(+getDisplayTokenAmount(+(tokenBalances.find(el => el.tokenID === token.tokenID)?.availableBalance || 0), token) || 0) * (conversionRates[token.symbol][currency] || 0)}
                onBack={() => setToken(null)}
              /> :
                <>
                  <Box className="wallet-header">
                    <Box className="wallet-header-top-box">
                      <IconButton className="wallet-menu-button" onClick={() => setOpenWalletMenu(!openWalletMenu)}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                      </IconButton>
                      {
                        openWalletMenu &&
                        <Box className="wallet-menu">
                          <MenuItem className={menuAddressCopied ? 'menu-copied-address' : ''} onClick={onMenuCopyAddress}>
                            {
                              menuAddressCopied ?
                                <>
                                  <CheckCircleIcon />
                                  <Typography variant="body2">Copied Address</Typography>
                                </> :
                                <>
                                  <CopyIcon />
                                  <Typography variant="body2">Copy Address</Typography>
                                </>
                            }
                          </MenuItem>
                          <MenuItem onClick={onViewLiskscan}>
                            <FontAwesomeIcon icon={faUpRightFromSquare} />
                            <Typography variant="body2">View on Liskscan</Typography>
                          </MenuItem>
                        </Box>
                      }
                      <Typography className="wallet-address" variant="body2" onClick={onCopyAddress}>{ellipsisAddress(address || '')}</Typography>
                      {
                        addressCopied &&
                        <Box className="copied-alert">
                          <CheckCircleIcon />
                          <Typography variant="body2">Copied Address</Typography>
                        </Box>
                      }
                      <IconButton className="wallet-exit-button" onClick={onDisconnect}>
                        <FontAwesomeIcon icon={faArrowRightFromBracket} />
                      </IconButton>
                    </Box>
                    <Box className="avatar-icon">
                      <WalletVisual address={address} size={40} />
                    </Box>
                    <Typography variant="body2">Total balance</Typography>
                    <Typography variant="h2">{currencyDecimalFormat(balance, currency)}</Typography>
                  </Box>

                  <Box className="wallet-body">
                    <Typography variant="h4">Tokens</Typography>
                    {
                      tokenBalances.map(token =>
                        <Box
                          className="token-item"
                          key={token.tokenID}
                          onClick={() => setToken(getTokenDetail(token.tokenID) || null)}
                        >
                          <img src={getTokenDetail(token.tokenID)?.logo.png} alt={getTokenDetail(token.tokenID)?.symbol} width={40} height={40} style={{ borderRadius: '100%' }} />
                          <Box className="token-summary">
                            <Box className="token-summary-box top">
                              <Typography variant="body1">{getTokenDetail(token.tokenID)?.tokenName}</Typography>
                              <Typography variant="body2">{getDisplayTokenAmount(+token.availableBalance, getTokenDetail(token.tokenID) || accountTokens[0])} {getTokenDetail(token.tokenID)?.symbol}</Typography>
                            </Box>
                            <Box className="token-summary-box bottom">
                              <Typography variant="body2">{getTokenDetail(token.tokenID)?.symbol}</Typography>
                              <Typography variant="body2">{currencySymbols[currency]} {+getDisplayTokenAmount(+token.availableBalance, getTokenDetail(token.tokenID) || accountTokens[0]) * (conversionRates[getTokenDetail(token.tokenID)?.symbol || 'LSK'][currency] || 0)}</Typography>
                            </Box>
                          </Box>
                          <FontAwesomeIcon icon={faChevronRight} />
                        </Box>)
                    }
                  </Box>
                </>
            }</>,
            [TABS.HISTORY]: <>
              <HistoryComponent
                accountTokens={accountTokens}
                accountAddress={address}
              />
            </>
          }[tab]
        }

        <Box className="wallet-footer">
          <Tabs
            className="wallet-tab"
            value={tab as number}
            onChange={onChangeTab}
            aria-label="icon position tabs example"
          >
            <Tab icon={<FontAwesomeIcon icon={faWallet} />} label="Wallet" />
            <Tab icon={<FontAwesomeIcon icon={faClockRotateLeft} />} label="History" />
          </Tabs>
        </Box>
      </Box>
    </WalletModalStyle >
  );
};