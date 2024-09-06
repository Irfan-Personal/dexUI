import { ITransaction, ITransactionObject } from 'models';

export const mockTransactions: ITransaction[] = [
  {
    id: 'f9593f101c4acafc3ede650ab4c10fa2ecb59b225813eddbbb17b47e96932e9b',
    moduleCommand: 'swapExactIn',
    nonce: '0',
    fee: '1000000',
    minFee: '75000',
    size: 165,
    block: {
      id: '01967dba384998026fe028119bd099ecf073c05c045381500a93d1a7c7307e5b',
      height: 8350681,
      timestamp: 1613323667,
      isFinal: true
    },
    sender: {
      address: 'lskdwsyfmcko6mcd357446yatromr9vzgu7eb8y99',
      publicKey: 'b1d6bc6c7edd0673f5fed0681b73de6eb70539c21278b300f07ade277e1962cd',
      name: 'genesis_84'
    },
    params: {
      tokenIdIn: '0400001100000000',
      tokenIdOut: '0400001100000000',
      maxAmountTokenIn: 1000000,
      amountTokenOut: 1000000,
    },
    executionStatus: 'success',
    index: 0,
  }
];

export const mockTransactionRaw: ITransactionObject = {
  module: 'dex',
  command: 'createPool',
  fee: '173000',
  nonce: '6',
  params: {
    feeTier: 100,
    initialPosition: {
      tickLower: -887272,
      tickUpper: 887272,
      amount0Desired: 100000000,
      amount1Desired: 1
    },
    maxTimestampValid: 100000000000,
    tickInitialPrice: 1,
    tokenID0: '0400000000000000',
    tokenID1: '0400001100000000',
  },
  senderPublicKey: 'c2d2e4b205a3197f13d7e2c5218391a06971437cad06ef51443522ba7c8e8fb5',
  signatures: []
};