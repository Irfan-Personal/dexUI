import { mockAccount } from '__mock__';
import { TransactionCommands, TransactionModule } from 'consts';
import { createTransactionObject } from './transaction';

const params: any = {
  tokenIdIn: '0400000000000000',
  tokenIdOut: '0400001100000000',
  maxAmountTokenIn: 1000,
  amountTokenOut: 100,
  swapRoute: ['0400000000000000040000110000000064000000'],
  maxTimestampValid: 100000000000,
};

describe('test transaction functions', () => {
  it('createTransactionObject', async () => {
    await expect(createTransactionObject(TransactionModule.dex, TransactionCommands.swapExactOut, mockAccount, params)).rejects.toThrow();
  });
});
