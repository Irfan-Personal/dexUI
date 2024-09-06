import React, { createContext, useState, useEffect } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { Theme } from '@mui/material/styles';

import { darkTheme, lightTheme } from 'styles/theme';
import { ThemeType } from 'consts';

export type IPlatformContext = {
  splipageTolerance: number,
  transactionDeadline: number,
  walletConnection: boolean,
  currency: string,
  getThemeType: () => ThemeType,
  saveTheme: (theme: ThemeType) => void,
  saveCurrency: (currency: string) => void,
  getWalletConnection: () => boolean,
  saveTransactionDeadline: (transactionDeadline: number) => void,
  saveSplipageTolerance: (splipageTolerance: number) => void,
  resetSession: () => void
};

export const PlatformContext = createContext<IPlatformContext>({
  splipageTolerance: 0.5,
  transactionDeadline: 20,
  walletConnection: false,
  currency: 'USD',
  getThemeType: () => ThemeType.Dark,
  saveTheme: () => { },
  saveCurrency: () => { },
  getWalletConnection: () => false,
  resetSession: () => { },
  saveTransactionDeadline: () => { },
  saveSplipageTolerance: () => { },
});

type PlatformContextProviderProps = {
  children: React.ReactNode
}

export const PlatformContextProvider: React.FC<PlatformContextProviderProps> = ({ children }) => {

  const [theme, setTheme] = useState<Theme>(lightTheme);
  const [currency, setCurrency] = useState<string>('USD');
  const [walletConnection, setWalletConnection] = useState<boolean>(false);
  const [transactionDeadline, setTransactionDeadline] = useState<number>(10);
  const [splipageTolerance, setSplipageTolerance] = useState<number>(0.5);

  const getThemeType = () => {
    return sessionStorage.getItem('theme') as ThemeType ?? ThemeType.Dark;
  };

  const saveTheme = (themeType: ThemeType) => {
    sessionStorage.setItem('theme', themeType);
    setTheme(themeType === ThemeType.Light ? lightTheme : darkTheme);
  };

  const getCurrency = () => {
    return sessionStorage.getItem('currency') ?? 'USD';
  };

  const saveCurrency = (_currency: string) => {
    setCurrency(_currency);
    sessionStorage.setItem('currency', _currency);
  };

  const getWalletConnection = () => {
    return !!sessionStorage.getItem('wallet-token');
  };

  const resetSession = () => {
    sessionStorage.removeItem('theme');
  };

  const saveSplipageTolerance = (_splipageTolerance: number) => {
    setSplipageTolerance(_splipageTolerance);
  };

  const saveTransactionDeadline = (_transactionDeadline: number) => {
    setTransactionDeadline(_transactionDeadline);
  };

  useEffect(() => {
    const themeType = getThemeType();
    if (themeType === ThemeType.Dark)
      setTheme(darkTheme);
    if (themeType === ThemeType.Light)
      setTheme(lightTheme);

    setCurrency(getCurrency());
    setWalletConnection(getWalletConnection());
  }, []);

  return (
    <PlatformContext.Provider value={{
      splipageTolerance,
      transactionDeadline,
      walletConnection,
      currency,
      getThemeType,
      saveTheme,
      saveCurrency,
      getWalletConnection,
      resetSession,
      saveSplipageTolerance,
      saveTransactionDeadline
    }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </PlatformContext.Provider>
  );
};
