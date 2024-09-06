export enum TransactionType {
  SWAP = 'SWAP',
  SUPPLY_LIQUIDITY = 'SUPPLY_LIQUIDITY',
  INCREASE_LIQUIDITY = 'INCREASE_LIQUIDITY',
  REMOVE_LIQUIDITY = 'REMOVE_LIQUIDITY',
}

export enum TransactionModule {
  dex = 'dex',
  dexGovernance = 'dexGovernance'
}

export const TransactionCommands = {
  swapExactIn: 'swapExactIn',
  swapExactOut: 'swapExactOut',
  createPool: 'createPool',
  createPosition: 'createPosition',
  addLiquidity: 'addLiquidity',
  removeLiquidity: 'removeLiquidity',
  createProposal: 'createProposal',
  voteOnProposal: 'voteOnProposal',
};

export enum TransactionStatus {
  PENDING,
  SUCCESS,
  FAILURE,
}