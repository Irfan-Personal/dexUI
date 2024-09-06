import { ChainsMap } from 'caip-api';
import { ChainMetadata, NamespaceMetadata } from 'models';

// TODO: add `lisk` namespace to `caip-api` package to avoid manual specification here.
export const LiskChainData: ChainsMap = {
  '01000011': {
    id: 'lisk:01000011',
    name: 'Dex Testnet',
    rpc: ['https://testnet.service.lisk.com'],
    slip44: 501,
    testnet: true,
  },
};

export const LiskMetadata: NamespaceMetadata = {
  // Lisk Dex Testnet
  '01000011': {
    logo: 'https://lisk-qa.ams3.digitaloceanspaces.com/lisk.png',
    rgb: '0, 0, 0',
  },
};

export function getChainMetadata(chainId: string): ChainMetadata {
  const reference = chainId.split(':')[1];
  const metadata = LiskMetadata[reference];
  if (typeof metadata === 'undefined') {
    throw new Error(`No chain metadata found for chainId: ${chainId}`);
  }
  return metadata;
}
