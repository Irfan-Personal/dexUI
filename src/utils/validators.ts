
import { address as addressFunctions } from '@liskhq/lisk-cryptography';

export const isValidURL = (url: string) => {
  const res = url.match(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi);
  return (res !== null);
};

export const validateAddress = (address: string) => {
  if (address === '') {
    return -1;
  }

  try {
    return addressFunctions.validateLisk32Address(address) ? 0 : 1;
  } catch (e) {
    return 1;
  }
};