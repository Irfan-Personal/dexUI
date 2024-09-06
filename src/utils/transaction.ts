import { apiGetAuth, apiGetEstimationFee } from 'apis';
import { AxiosError } from 'axios';
import { TransactionModule } from 'consts';
import { IAccount, INetwrokFeeResponse, ITransactionObject } from 'models';

export const createTransactionObject = async <T>(module: TransactionModule, command: string, account: IAccount, params: T): Promise<{
  feeTokenID: string,
  transactionObject: ITransactionObject
}> => {
  try {
    const { address, publicKey } = account;

    const authResponse = await apiGetAuth({
      address,
    });

    const transaction = {
      module,
      command,
      fee: '0',
      nonce: authResponse.data.nonce || 0,
      senderPublicKey: publicKey,
      signatures: [],
      params
    };

    const networkFeeReponse: INetwrokFeeResponse = await apiGetEstimationFee({
      transaction,
    });

    return {
      feeTokenID: networkFeeReponse.data.transaction.fee.tokenID,
      transactionObject: {
        ...transaction,
        fee: '2000000000',
      }
    };
  } catch (e: any) {
    if (e instanceof AxiosError)
      throw new Error(e.response?.data.message);
    throw new Error(e);
  }
};