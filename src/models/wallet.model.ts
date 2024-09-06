export interface AssetData {
  symbol: string;
  name: string;
  decimals: string;
  contractAddress: string;
  balance?: string;
}

export interface AccountBalances {
  [account: string]: AssetData[];
}

export interface GasPrice {
  time: number;
  price: number;
}

export interface GasPrices {
  timestamp: number;
  slow: GasPrice;
  average: GasPrice;
  fast: GasPrice;
}

export interface TxOperation {
  asset: AssetData;
  value: string;
  from: string;
  to: string;
  functionName: string;
}

export interface ParsedTx {
  timestamp: string;
  hash: string;
  from: string;
  to: string;
  nonce: string;
  gasPrice: string;
  gasUsed: string;
  fee: string;
  value: string;
  input: string;
  error: boolean;
  asset: AssetData;
  operations: TxOperation[];
}

export interface ChainMetadata {
  name?: string;
  logo: string;
  rgb: string;
}

export interface NamespaceMetadata {
  [reference: string]: ChainMetadata;
}


export interface ChainData {
  name: string;
  id: string;
  rpc: string[];
  slip44: number;
  testnet: boolean;
}
export interface ChainsMap {
  [reference: string]: ChainData;
}

export interface ChainNamespaces {
  [namespace: string]: ChainsMap;
}

export interface AccountAction {
  method: string;
  callback: (chainId: string, address: string) => Promise<void>;
}

export interface IAccount {
  chainId: string,
  publicKey: string,
  address?: string,
}