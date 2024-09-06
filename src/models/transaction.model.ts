export interface IExpense {
  title: string,
  amount: string,
}

export interface ITransaction {
  id: string,
  moduleCommand: string,
  nonce: string,
  fee: string,
  minFee: string,
  size: number,
  block: {
    id: string,
    height: number,
    timestamp: number,
    isFinal: boolean
  },
  sender: {
    address: string,
    publicKey: string,
    name: string
  },
  params: any,
  executionStatus: string,
  index: number,
}

export interface ITransactionObject {
  id?: string,
  module: string,
  command: string,
  nonce: string,
  fee: string,
  senderPublicKey: string,
  signatures: string[],
  params: unknown,
}

export interface IAuth {
  nonce: string,
  numberOfSignatures: number,
  mandatoryKeys: any[],
  optionalKeys: any[]
}

export interface ICreatePoolParams {
  tokenID0: string,
  tokenID1: string,
  feeTier: number,
  tickInitialPrice: number,
  initialPosition: {
    tickLower: number,
    tickUpper: number,
    amount0Desired: number,
    amount1Desired: number,
  },
  maxTimestampValid: number,
}