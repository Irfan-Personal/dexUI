export const LISK_DECIMALS = 8;

export const DEFAULT_MAIN_CHAINS = [
  // mainnets
  'lisk:00000000',
];

export const DEFAULT_TEST_CHAINS = [
  'lisk:01000011', // testnet
];

export const DEFAULT_CHAINS = [...DEFAULT_MAIN_CHAINS, ...DEFAULT_TEST_CHAINS];

export const DEFAULT_PROJECT_ID = process.env.NEXT_PUBLIC_PROJECT_ID;

export const DEFAULT_RELAY_URL = process.env.NEXT_PUBLIC_RELAY_URL;

export const DEFAULT_LOGGER = 'debug';

export const DEFAULT_APP_METADATA = {
  name: 'Lisk DEX',
  description: 'Lisk DEX for WalletConnect',
  url: 'https://walletconnect.com/',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
};

/**
 * LI|SK
 */
export enum DEFAULT_LISK_METHODS {
  LSK_SIGN_TRANSACTION = 'sign_transaction',
  LSK_SIGN_MESSAGE = 'sign_message',
}

export enum DEFAULT_LISK_EVENTS { }