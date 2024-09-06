import { IAccount } from 'models';

export const LOCALSTORAGE_KEY_TESTNET = 'TESTNET';
export const INITIAL_STATE_TESTNET_DEFAULT = process.env.NEXT_PUBLIC_TEST_NET === 'testnet';

export const ellipsisAddress = (address: string) => {
  return `${address.slice(0, 6)}...${address.slice(address.length - 4, address.length)}`;
};

export function setLocaleStorageTestnetFlag(value: boolean): void {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(LOCALSTORAGE_KEY_TESTNET, `${value}`);
  }
}

export function getLocalStorageTestnetFlag(): boolean {
  let value = INITIAL_STATE_TESTNET_DEFAULT;
  if (typeof window !== 'undefined') {
    const persisted = window.localStorage.getItem(LOCALSTORAGE_KEY_TESTNET);
    if (!persisted) {
      setLocaleStorageTestnetFlag(value);
    } else {
      value = persisted === 'true' ? true : false;
    }
  }
  return value;
}

export function getAccountsFromNamespaces(allNamespaceAccounts: string[]): IAccount[] {
  return allNamespaceAccounts.reduce((accounts: IAccount[], account) => {
    const [namespace, reference, publicKey] = account.split(':');
    accounts.push({
      chainId: `${namespace}:${reference}`,
      publicKey,
    });
    return accounts;
  }, []);
}


export function getPublicKeysFromAccounts(allNamespaceAccounts: string[]): string[] {
  return allNamespaceAccounts.reduce((publicKeys: string[], account) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [namespace, reference, publicKey] = account.split(':');
    publicKeys.push(publicKey);
    return publicKeys;
  }, []);
}

export function getFiatfromToken(tokenAmount: number, conversion: number) {
  return (tokenAmount * conversion).toLocaleString(undefined,
    {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
}

export function timestampToString(time: number) {
  const date = new Date(time);
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  return `${months[date.getMonth()]} ${date.getDate()}th ${date.getFullYear()} ${date.getHours() % 12}:${date.getMinutes()} at ${date.getHours() >= 12 ? 'pm' : 'am'}`;
}

const randomCharsSequence = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export const generateUniqueId = (randomDigits = 5) => {
  let uniqueId = `${new Date().getTime()}-`;
  Array.from(Array(randomDigits).keys()).map(() => {
    const randomCharIndex = Math.floor(Math.random() * randomCharsSequence.length);
    uniqueId = uniqueId.concat(randomCharsSequence.charAt(randomCharIndex));
    return uniqueId;
  });
  return uniqueId;
};
