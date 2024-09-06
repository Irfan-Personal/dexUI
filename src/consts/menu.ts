import { PATHS } from './paths';

export const menuItems = [
  {
    title: 'Swap',
    href: PATHS.SWAP,
  },
  {
    title: 'Pool',
    href: PATHS.POOL,
  },
  {
    title: 'Info',
    href: PATHS.INFO,
  },
  {
    title: 'Governance',
    href: PATHS.GOVERNANCE,
  },
];

export enum ThemeType {
  Light = 'Light',
  Dark = 'Dark',
}

export const currencySymbols: {
  [key: string]: string,
} = {
  USD: '$',
  EUR: '€',
};